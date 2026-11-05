import { request } from '@/api/client'

export const getProducts = (options = {}) => request('products', options)
