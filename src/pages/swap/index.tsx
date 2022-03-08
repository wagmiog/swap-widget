import React from 'react'
import { PageWrapper, GridContainer, TopContainer, StatsWrapper } from './styleds'
import SwapWidget from '../../components/SwapWidget'
import LimitOrderList from '../../components/LimitOrderList'
import { useGelatoLimitOrderList } from '../../state/swap/hooks'

const SwapUI = () => {
  const { allOrders } = useGelatoLimitOrderList()

  const isLimitOrders = (allOrders || []).length > 0
  return (
    <PageWrapper>
      <TopContainer>
          <StatsWrapper>
          </StatsWrapper>
        <SwapWidget />
      </TopContainer>

      <GridContainer isLimitOrders={isLimitOrders}>
        {isLimitOrders && <LimitOrderList />}
      </GridContainer>
    </PageWrapper>
  )
}
export default SwapUI