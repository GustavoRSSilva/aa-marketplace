import { atom } from 'jotai';

// Used to cache tokens info (eg: Symbols, Decimals) by token address
// This will avoid unnecessary blockchain calls
export const tokensInfoAtom = atom(new Map());

// Rewards Pool smart contract token list
export const smartContractTokenListAtom = atom([]);

// Initialized Smart Contracts
export const initializedSmartContractsAtom = atom(new Map());

// Stores metadata about blockchain network and available smart contracts addresses
export const blockchainMetaAtom = atom();
