import { BASE_URL } from '@/api/api'
import { Product } from '@/types/types'
import { fetchBase } from '../api/api'

export const getAllProducts = async (): Promise<Product[]> => {
  return await fetchBase('/products')
}

// export const getAllProducts = async (): Promise<Product[]> => {
//   const res = await fetch(`${BASE_URL}/products`, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   return res.json()
// }

export const getById = async (id: string): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    headers: { 'Content-Type': 'application/json' },
    next: {
      revalidate: 60
    }
  })
  return res.json()
}

// export const createProduct = async (data: Product): Promise<Product> => {
//   return await fetchBase<Product>('/products', {
//     method: 'POST',
//     body: JSON.stringify(data)
//   })
// }

// export const deleteProduct = async (id: number): Promise<void> => {
//   return await fetchBase<void>(`/products/${id}`, {
//     method: 'DELETE'
//   })
// }
