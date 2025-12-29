import { useEffect, useState } from 'react';

/**
 * Small helper for persisted UI preferences.
 * - Reads once on mount
 * - Persists on change
 */
export function useLocalStorageState(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw == null ? defaultValue : JSON.parse(raw);
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore (private mode, quota, etc.)
    }
  }, [key, value]);

  return [value, setValue];
}


