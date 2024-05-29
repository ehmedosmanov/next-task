export const BASE_URL = 'https://fakestoreapi.com'

interface Options extends RequestInit {
  next?: {
    revalidate: number;
  }
  cache?: RequestCache;
}


export async function fetchBase<T>(endpoint: string, options: Options = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    next: {
      revalidate: options.next?.revalidate || 60
    },
    cache: options.cache || 'default'
  })
  if (!res.ok) {
    throw new Error('Error when fetching')
  }

  return res.json() as Promise<T>
}
