import React, { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import useChatContract from './useChatContract';
import BlockchainArtifact from "./contract/BlockchainChat-artifact.json"

function App() {
  const contractAddress = "0x56cD072f27f06a58175aEe579be55601E82D8fcD";
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
