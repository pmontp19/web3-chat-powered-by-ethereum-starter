import React, { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import useChatContract from './useChatContract';
import BlockchainArtifact from "./contract/BlockchainChat-artifact.json"

function App() {
  const contractAddress = "0x46bf453ca932ac8964d859590e4e547c2068b11f";
  const [account, setAccount] = useState<string>();

  const chatContract = useChatContract(
    contractAddress,
    BlockchainArtifact.abi,
    account
  )

  return (
    <div className="App">
      <Sidebar setAccount={setAccount} account={account} />
      <Chat account={account} chatContract={chatContract} />
    </div>
  );
}

export default App;
