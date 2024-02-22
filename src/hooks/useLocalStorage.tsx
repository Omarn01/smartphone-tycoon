import { useEffect, useState } from 'react'

export const useLocalStorage = ({ key }: any) => {
  const [state, setState] = useState<any>(() => {
    const phone = localStorage.getItem('phone')
    return key || []
  })
  useEffect(() => {
    localStorage.setItem(key, state)
  }, [state])
  return [state, setState]
}
