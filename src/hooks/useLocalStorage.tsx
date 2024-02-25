export const useLocalStorage = (key: string) => {
  const setItem = (value: any) => {
    window?.localStorage?.setItem(key, value)
  }
  const getItem = () => {
    const value = window?.localStorage?.getItem(key)
    return value
  }
  const deleteItem = () => {
    return window?.localStorage?.removeItem(key)
  }
  return { setItem, getItem, deleteItem }
}
