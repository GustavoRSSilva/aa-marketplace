import { useState, useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { walletAddressAtom, providerAtom } from '@/store/wallet';
import { initializedSmartContractsAtom } from '@/store/blockchain';
import ethers, { Contract } from 'ethers';
import { SmartContractDefinition } from '../base/smartContracts/definitions';

function useSmartContract(smartContractDetails: SmartContractDefinition) {
  const provider = useAtomValue(providerAtom);
  const walletAddress = useAtomValue(walletAddressAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [initializedSmartContract, setInitializedSmartContracts] = useAtom(
    initializedSmartContractsAtom,
  );

  const fetchSmartContract = async (recreate: boolean) => {
    if (
      !provider ||
      !walletAddress ||
      (!recreate &&
        !isLoading &&
        initializedSmartContract.get(smartContractDetails.name))
    ) {
      return;
    }

    const smartContractAddress = smartContractDetails.address;

    const smartContract = new ethers.Contract(
      smartContractAddress,
      smartContractDetails.abi,
      provider,
    );

    setInitializedSmartContracts((infoMap: Map<string, Contract>) => {
      infoMap.set(smartContractDetails.name, smartContract);
      return infoMap;
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSmartContract(false).catch((e) => console.error(e));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider, walletAddress]);

  /**
   * Setting loading to true to regenerate contract with the new provider
   */
  useEffect(() => {
    if (walletAddress) {
      fetchSmartContract(true).catch((e) => console.error(e));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletAddress]);

  return {
    smartContract: initializedSmartContract.get(smartContractDetails.name),
    provider,
    walletAddress,
    isLoading,
  };
}

export default useSmartContract;
