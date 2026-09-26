import { useState } from 'react'

export function useStoredCollection<T>(key: string, defaults: T[]) {
  const [items, setItems] = useState<T[]>(() => {
    const savedItems = localStorage.getItem(key)

    if (!savedItems) {
      return defaults
    }

    try {
      return JSON.parse(savedItems) as T[]
    } catch {
      return defaults
    }
  })

  const saveItems = (nextItems: T[]) => {
    setItems(nextItems)
    localStorage.setItem(key, JSON.stringify(nextItems))
  }

  const resetItems = () => {
    setItems(defaults)
    localStorage.removeItem(key)
  }

  return { items, saveItems, resetItems }
}
