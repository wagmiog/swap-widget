# Pangolin swap widget
A widget for projects to embed Pangolin's Swap functionality within their dApp

# Getting Started
Instantiate PangolinSwap
```
import {
  PangolinSwap,
  utils,
} from "@pangolindex/swap-widget";

// Supported networks: Mainnet = 1; Ropsten = 3; Polygon = 137; Fantom = 250; Avalanche = 43114;  BSC = 56
const chainId = 1;
const signerOrProvider = await provider.getSigner();

const pangolinSwap = new PangolinSwap(
  chainId as ChainId,
  signerOrProvider, // optional
  handler // optional
);
```