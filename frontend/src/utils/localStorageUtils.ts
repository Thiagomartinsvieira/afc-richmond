export async function checkLocalStorageToken() {
  return new Promise<string | null>((resolve) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      resolve(token)
    } else {
      resolve(null)
    }
  })
}
