// mainnet | ropsten | goerli | bsc | matic | fantom | avalanche
export type ChainId = 1 | 3 | 5 | 56 | 137 | 250 | 43114;

export interface Order {
  id: string;
  owner: string;
  inputToken: string;
  outputToken: string;
  minReturn: string;
  maxReturn?: string;
  inputAmount: string;
}