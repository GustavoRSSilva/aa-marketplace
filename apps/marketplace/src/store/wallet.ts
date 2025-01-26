import { CONNECTION_STATUS } from '@/base/constants/wallet';
import { atom } from 'jotai';

/**
 * User wallet atoms (managed by hook useWalletProvider)
 * This state atoms are accessible through the application without need to use the hook
 */

// Wallet provider
export const providerAtom = atom(undefined);

// Is initialized flag
export const isInitializedAtom = atom(false);

// Connection status atom
export const connectionStatusAtom = atom(CONNECTION_STATUS.NOT_CONNECTED);

// Is connected flag
export const isConnectedAtom = atom(false);

// Is connecting flag
export const isConnectingAtom = atom(false);

// Connected wallet Address
export const walletAddressAtom = atom(undefined);
