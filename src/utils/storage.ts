import { StorageKey } from '@/enums/storage';
import { parseJSON } from './general';

// Session storage
export const setToSessionStorage = <T = unknown>(key: StorageKey, value: T) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const removeFromSessionStorage = (key: StorageKey) => {
  sessionStorage.removeItem(key);
};

export const getFromSessionStorage = <T = unknown>(key: StorageKey) => {
  const valueString = sessionStorage.getItem(key);
  return parseJSON<T>(valueString);
};

// Local storage
export const setToLocalStorage = <T = unknown>(key: StorageKey, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromLocalStorage = (key: StorageKey) => {
  localStorage.removeItem(key);
};

export const getFromLocalStorage = <T = unknown>(key: StorageKey) => {
  const valueString = localStorage.getItem(key);
  return parseJSON<T>(valueString);
};
