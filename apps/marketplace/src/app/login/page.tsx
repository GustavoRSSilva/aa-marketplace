'use client'

import { useRouter } from 'next/navigation'
import { useAccount, useConnect, useDisconnect, Connector } from 'wagmi'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const router = useRouter()

  const handleConnect = (e: React.MouseEvent<HTMLButtonElement>, connector: Connector) => {
      e.preventDefault()
      connect({ connector })
      router.push('/')
  }

  const handleSCAConnect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector: Connector) => (
          <button
            key={connector.uid}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleConnect(e, connector)}
            type="button"
          >
            {connector.name}
          </button>
        ))}
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSCAConnect(e)}
            type="button"
          >
            ERC-4337 SCA
          </button>
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  )
}

export default App
