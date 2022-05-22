import { Request, Response } from 'express'

// Interfaces
import { ISale, Sale } from '../models/sale.model'

// Utils
import { groupSales } from './utils/manageData'

export const getSales = async (req: Request, res: Response) => {
  // req.query.from (start timestamp)
  // req.query.to (start timestamp)

  const allSales = await Sale.find().sort({ timestamp: 1 })

  const groupedSales = groupSales(allSales)

  return res.status(200).json({ data: groupedSales })
}

export const addSale = async (req: Request, res: Response) => {
  const { name, value, timestamp } = req.body

  if (!name || !value || !timestamp) {
    return res.status(422).json({
      message: 'All fields are required',
    })
  }

  const metric: ISale = new Sale({
    name,
    value,
    timestamp,
  })

  const created = await Sale.create(metric)

  return res.status(201).json({ data: created })
}
