
import useSmartContract from "./useSmartContract";
import SmartContracts from "../base/smartContracts/definitions";

export const useAccountAbstraction = () => {

    const {
        smartContract: SimpleAccountFactorySmartContract,
        walletAddress,
        isLoading: isLoadingContract,
    } = useSmartContract(SmartContracts.SimpleAccountFactory);

    // Create a new wallet
    async function connect(salt: string) {
      const tx = await SimpleAccountFactorySmartContract.createAccount(walletAddress, salt);
      const receipt = await tx.wait();
      const walletCreatedEvent = receipt.events.find(
        (event) => event.event === "AccountCreated",
      );
      const newWalletAddress = walletCreatedEvent.args.wallet;
      console.log("New wallet created at:", newWalletAddress);
    }

  return {
    connect,
    isLoadingContract,
  };
};
