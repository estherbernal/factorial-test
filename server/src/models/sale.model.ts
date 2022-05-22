import { Schema, model } from 'mongoose'
import { Stores } from '../services/types/types'

export interface ISale {
  name: Stores
  value: number
  timestamp: Date
}

const saleSchema = new Schema<ISale>({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  timestamp: {
    type: Date,
    required: true,
  },
})

export const Sale = model<ISale>('Sale', saleSchema)
