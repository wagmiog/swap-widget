import React from 'react'
import { PageWrapper, GridContainer, TopContainer, StatsWrapper } from './styleds'
import SwapWidget from './SwapWidget'
import LimitOrderList from './LimitOrderList'
import { useGelatoLimitOrderList } from '../state/swap/hooks'

const SwapUI = () => {
  const { allOrders } = useGelatoLimitOrderList()

  const isLimitOrders = (allOrders || []).length > 0
  return (
    <PageWrapper>
      <TopContainer>
        <SwapWidget />
      </TopContainer>

      <GridContainer isLimitOrders={isLimitOrders}>
        {isLimitOrders && <LimitOrderList />}
      </GridContainer>
    </PageWrapper>
  )
}
export default SwapUI
