import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const useChatContract = (contractAddress: string, web3ChatAbi: ethers.ContractInterface, account?: string): ethers.Contract | undefined => {
    const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>()
    const [webThreeProvider, setWebThreeProvider] = useState<ethers.providers.Web3Provider>()
    const { ethereum } = window

    // check for window.ethereum exposed by metamask
    useEffect(() => {
        if (ethereum) {
            setWebThreeProvider(new ethers.providers.Web3Provider(window.ethereum))
        }
    }, [ethereum]);

    // user account address
    useEffect(() => {
        if (webThreeProvider && account) {
            setSigner(webThreeProvider.getSigner())
        }
    }, [account, webThreeProvider]);

    if (!contractAddress || !web3ChatAbi || !ethereum || !webThreeProvider) return;

    // return a new Contract instance
    return new ethers.Contract(
        contractAddress,
        web3ChatAbi,
        signer || webThreeProvider
    );
}

export default useChatContract;