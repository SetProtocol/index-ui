import { createContext } from 'react'

interface CgiTokenMarketDataValues {
  prices?: number[][]
  dayPrices?: number[][]
  marketcaps?: number[][]
  volumes?: number[][]
  latestPrice?: number
  latestMarketCap?: number
  latestVolume?: number
}

const CgiMarketData = createContext<CgiTokenMarketDataValues>({})

export default CgiMarketData
