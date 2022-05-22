import { Stores, StoresKeys } from '../types/types'

export const camalize = (str: Stores): StoresKeys => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()) as StoresKeys
}
