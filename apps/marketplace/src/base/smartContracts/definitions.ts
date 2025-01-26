import { InterfaceAbi } from 'ethers';
import * as SIMPLE_ACCOUNT_FACTORY_ABI from '../abi/SimpleAccountFactoryAbi.json';

export type SmartContractDefinition = {
    name: string;
    abi: InterfaceAbi;
    address: string;
}

export type SmartContractDefinitions = {
  SimpleAccountFactory: SmartContractDefinition
}

/**
 * Available Smart Contracts definitions
 * to be used with useSmartContract(definition) hook
 * Name will be used to fetch address from /meta
 */
const definitions = {
  SimpleAccountFactory: {
    name: 'SimpleAccountFactory',
    abi: SIMPLE_ACCOUNT_FACTORY_ABI,
    address: process.env.SIMPLE_ACCOUNT_FACTORY_AMOY_ADDRESS ?? ""
  }
}

export default definitions;
