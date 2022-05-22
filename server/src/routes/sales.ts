import express from 'express'
import { addSale, getSales } from '../services/salesServices'

const router = express.Router()

router.get('/', getSales)

router.post('/', addSale)

export default router
