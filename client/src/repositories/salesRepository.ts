import axios, { AxiosError } from 'axios'
import { client } from './axios'

export interface Sale {
  date: string
  storeA: number
  storeB: number
  storeC: number
  average: number
}
export interface Data {
  sales: Sale[]
  averagePerMinute: number
  averagePerHour: number
  averagePerDay: number
}
export interface Response {
  data: Data
}

export interface DTO {
  timestamp: number
  name: string
  value: number
}

export interface CustomError {
  response: {
    data: {
      message: string
    }
  }
}

export const salesRespository = {
  async getAll() {
    try {
      const response: Response = await client.get(`/sales/`)
      return { data: response.data }
    } catch (err) {
      const error = err as CustomError
      return {
        error: error.response.data.message,
      }
    }
  },
  async addSale(data: DTO) {
    try {
      if (data.value <= 0) {
        return {
          error: 'Income must be bigger than 0',
        }
      }
      const response: Response = await client.post(`/sales/`, data)
      return { data: response.data }
    } catch (err) {
      const error = err as CustomError
      return {
        error: error.response.data.message,
      }
    }
  },
}
