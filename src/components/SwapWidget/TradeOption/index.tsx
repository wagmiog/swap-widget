import React from 'react'
import { Text, Box, ToggleButtons } from '@pangolindex/components'
import { SwapWrapper, SwapAlertBox } from './styled'
import { useTranslation } from 'react-i18next'
import { useActiveWeb3React } from '../../../hooks'
import { CHAINS } from '../../constants/chains'

interface Props {
  swapType: string
  setSwapType: (value: string) => void
}

const TradeOption: React.FC<Props> = ({ swapType, setSwapType }) => {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()

  return (
    <SwapWrapper>
      <SwapAlertBox>{t('swapPage.betaRelease')}</SwapAlertBox>
      <Box p={10}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text color="text1" fontSize={24} fontWeight={500}>
            {t('swapPage.trade')}
          </Text>
          {chainId && !CHAINS[chainId].supported_by_gelato ? (
          <ToggleButtons
            options={['MARKET']}
            value={swapType}
            onChange={value => {
              setSwapType(value)
            }}
          /> ) : (
            <ToggleButtons
            options={['MARKET', 'LIMIT']}
            value={swapType}
            onChange={value => {
              setSwapType(value)
            }}
          />
          )}
        </Box>
      </Box>
    </SwapWrapper>
  )
}
export default TradeOption
