import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

// Interfaces
import { ISale } from '../../models/sale.model'
import { Data, DataByDate, GroupedSales, Stores } from '../types/types'

// Utils
import { camalize } from './camalize'

const INITIAL_DATA: Data = {
  date: '',
  storeA: 0,
  storeB: 0,
  storeC: 0,
  average: 0,
}

// TODO: get the dates range to calculate the averages without hardcoding
export const groupSales = (sales: ISale[]) => {
  let total = 0
  const dataByDate: DataByDate = {}

  sales.forEach((sale) => {
    const date = dayjs(sale.timestamp).local().format('DD/MM/YYYY')
    const name = camalize(sale.name)
    total += sale.value

    const numberOfStores = Object.values(Stores).length

    if (dataByDate[date]) {
      const currentDaySales = dataByDate[date]
      currentDaySales[name] += sale.value
      const average =
        (currentDaySales.storeA +
          currentDaySales.storeB +
          currentDaySales.storeC) /
        numberOfStores
      currentDaySales.average = Number(average.toFixed(2))
    } else {
      const average = sale.value / numberOfStores

      dataByDate[date] = {
        ...INITIAL_DATA,
        date,
        [name]: sale.value,
        average: Number(average.toFixed(2)),
      }
    }
  })

  const averagePerDay = total / 7
  const averagePerHour = averagePerDay / 24
  const averagePerMinute = averagePerHour / 60

  const groupedSales: GroupedSales = {
    sales: Object.values(dataByDate),
    averagePerMinute: Number(averagePerMinute.toFixed(2)),
    averagePerHour: Number(averagePerHour.toFixed(2)),
    averagePerDay: Number(averagePerDay.toFixed(2)),
  }

  return groupedSales
}
