import { useContext } from 'react'

import { Btc2xFliPortfolioDataContext } from 'contexts/Btc2xFliPortfolioData'

const useBtc2xFliIndexPortfolioData = () => {
  return { ...useContext(Btc2xFliPortfolioDataContext) }
}

export default useBtc2xFliIndexPortfolioData
