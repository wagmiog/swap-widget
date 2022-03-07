import { useSelector } from 'react-redux'
import { ChainId, Token } from '@pangolindex/sdk'
import { AppState } from '../index'
import { useActiveWeb3React } from '../../hooks'
import { useAllTokens } from '../../hooks/Tokens'
import { PNG } from '../../constants/address'

export function useSelectedCurrencyLists(): Token[] | undefined {
  const { chainId = ChainId.AVALANCHE } = useActiveWeb3React()
  const allTokens = useAllTokens()
  const coins = Object.values(allTokens || {})

  let addresses = useSelector<AppState, AppState['watchlists']['currencies']>(state =>
    ([] as string[]).concat(state?.watchlists?.currencies || [])
  )

  addresses = [PNG[chainId]?.address, ...addresses]

  let allSelectedToken = [] as Token[]

  addresses.forEach(address => {
    const filterTokens = coins.filter(coin => address.toLowerCase() === coin.address.toLowerCase())

    allSelectedToken = [...allSelectedToken, ...filterTokens]
  })

  return allSelectedToken
}

export function useIsSelectedCurrency(address: string): boolean {
  const { chainId = ChainId.AVALANCHE } = useActiveWeb3React()

  let addresses = useSelector<AppState, AppState['watchlists']['currencies']>(state =>
    ([] as string[]).concat(state?.watchlists?.currencies || [])
  )

  addresses = [PNG[chainId]?.address, ...addresses]

  const isSelected = (addresses || []).includes(address)
  return isSelected
}
