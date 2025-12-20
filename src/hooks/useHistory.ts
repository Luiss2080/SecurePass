import { useState, useEffect } from 'react';

export interface HistoryItem {
  id: string;
  password: string;
  timestamp: number;
  strength: number; // 0-4
}

const HISTORY_KEY = 'securepass_history';
const MAX_HISTORY = 50;

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(HISTORY_KEY);
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing history', e);
      }
    }
  }, []);

  const addToHistory = (password: string, strength: number) => {
    const newItem: HistoryItem = {
      id: crypto.randomUUID(),
      password,
      timestamp: Date.now(),
      strength
    };

    setHistory(prev => {
      const newHistory = [newItem, ...prev].slice(0, MAX_HISTORY);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  };

  const deleteItem = (id: string) => {
    setHistory(prev => {
      const newHistory = prev.filter(item => item.id !== id);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  };

  return {
    history,
    addToHistory,
    clearHistory,
    deleteItem
  };
}
