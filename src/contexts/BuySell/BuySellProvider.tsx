import React, { useState, useEffect } from 'react'

import BuySellContext from './BuySellContext'

const BuySellProvider: React.FC = ({ children }) => {
  const [isViewingOrderSummary, setIsViewingOrderSummary] = useState<boolean>(
    false
  )
  const [isFetchingOrderData, setIsFetchingOrderData] = useState<boolean>(false)
  const [isUserBuying, setIsUserBuying] = useState<boolean>(true)
  const [activeField, setActiveField] = useState<'currency' | 'token'>(
    'currency'
  )
  const [selectedCurrency, setSelectedCurrency] = useState<any>()
  const [currencyQuantity, setCurrencyQuantity] = useState<number>(0)
  const [tokenQuantity, setTokenQuantity] = useState<number>(0)
  const [currencyOptions, setCurrencyOptions] = useState<any[]>([])
  const [uniswapData, setUniswapData] = useState<any>({})

  useEffect(() => {
    const options = [
      {
        value: 'eth',
        label: 'ETH',
      },
      {
        value: 'dai',
        label: 'DAI',
      },
      {
        value: 'usdc',
        label: 'USDC',
      },
    ]
    setCurrencyOptions(options)
    setSelectedCurrency(options[0])
  }, [])

  const onToggleIsViewingOrderSummary = () =>
    setIsViewingOrderSummary(!isViewingOrderSummary)
  const onToggleIsUserBuying = () => setIsUserBuying(!isUserBuying)
  const onSetActiveField = (field: 'currency' | 'token') =>
    setActiveField(field)
  const onSetCurrencyQuantity = (e: any) => setCurrencyQuantity(e.target.value)
  const onSetTokenQuantity = (e: any) => setTokenQuantity(e.target.value)
  const onSetSelectedCurrency = (currency: any) => {
    console.log('curency is?', currency)
    setSelectedCurrency(currency)
  }

  console.log('selected currency', selectedCurrency)

  return (
    <BuySellContext.Provider
      value={{
        isViewingOrderSummary,
        isFetchingOrderData,
        isUserBuying,
        activeField,
        selectedCurrency,
        currencyQuantity,
        tokenQuantity,
        currencyOptions,
        uniswapData,
        onToggleIsViewingOrderSummary,
        onToggleIsUserBuying,
        onSetActiveField,
        onSetSelectedCurrency,
        onSetCurrencyQuantity: onSetCurrencyQuantity,
        onSetTokenQuantity: onSetTokenQuantity,
        onExecuteBuySell: () => {},
      }}
    >
      {children}
    </BuySellContext.Provider>
  )
}

export default BuySellProvider
