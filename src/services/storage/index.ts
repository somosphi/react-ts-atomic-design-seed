export function getStorage(key: string) {
  const item = localStorage.getItem(key)

  return item ? JSON.parse(item) : null
}

export function setStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function clearStorage(key: string) {
  localStorage.removeItem(key)
}
