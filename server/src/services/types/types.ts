export enum Stores {
  storeA = 'Store A',
  storeB = 'Store B',
  storeC = 'Store C',
}

export enum StoresKeys {
  storeA = 'storeA',
  storeB = 'storeB',
  storeC = 'storeC',
}

export interface Data {
  date: string
  storeA: number
  storeB: number
  storeC: number
  average: number
}

export interface GroupedSales {
  sales: Data[]
  averagePerMinute: number
  averagePerHour: number
  averagePerDay: number
}

export interface DataByDate {
  [key: string]: Data
}
