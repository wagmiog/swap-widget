import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Web3ReactManager from '../components/Web3ReactManager'

import SwapV2 from './swap'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div<{ isBeta: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top:  ${({ isBeta }) => (isBeta ? '0px' : '100px')}; 
  align-items: ${({ isBeta }) => (isBeta ? 'unset' : 'center')};
  // padding: ${({ isBeta }) => (isBeta ? '50px' : undefined)};
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
  min-height: 100vh;

  ${({ theme, isBeta }) => theme.mediaWidth.upToSmall`
    padding: ${isBeta ? '0px' : '16px'};
    padding-top: ${isBeta ? '0px' : '2rem'}; 
  `};

  z-index: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {

  return (
    <Suspense fallback={null}>
      <AppWrapper>

        <BodyWrapper>
          <Web3ReactManager>
            <Switch>
              <Route exact path="/swap" component={SwapV2} />
            </Switch>
          </Web3ReactManager>
          <Marginer />
        </BodyWrapper>
      </AppWrapper>
    </Suspense>
  )
}
