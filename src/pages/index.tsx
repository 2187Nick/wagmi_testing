import {
	Flex,
	Box,
	Text,
	Button,
	Container,
	Heading,
	Stack,
	ListItem,
	UnorderedList,
	useDisclosure,
	Input } from '@chakra-ui/react'
import Head from 'next/head'
import { FC, useEffect, useState, useRef } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'

import { useAccount, useConnect, useBalance, useProvider, useSigner, useSignMessage } from 'wagmi'
import { verifyMessage } from 'ethers/lib/utils'

const Home = ()  =>   {
	//const Home = async ()  =>   {

	const { address, isConnecting, isDisconnected, status } = useAccount()
	const { connector: activeConnector, isConnected } = useAccount()
	const [value, setValue] = useState('')
  	const handleChange = (event) => setValue(event.target.value)
	//const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

    const provider = useProvider()

	//const { data: signer, isError, isLoading } = useSigner()
	//const { data: signer} = useSigner()
	/*const { data: signer } = useSigner({
		onSuccess(data) {
		  console.log('Success', data)
		},
	}) */

	  
	/*const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
	message: value,
	//message: 'gm wagmi frens',
	}) */

	const recoveredAddress = useRef<string>()
	const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
		onSuccess(data, variables) {
		// Verify signature when sign message succeeds
		const address = verifyMessage(variables.message, data)
		recoveredAddress.current = address
		},
	})


	//const { data, isError } = useBalance({addressOrName: 'fn-2187.eth'})
	

	//console.log("activeConnector: ", activeConnector)
	//console.log("isConnected: ", isConnected)

	//console.log("connect: ", connect)
	//console.log("connectors: ", connectors)
	//console.log("error: ", error)
	//console.log("isLoading: ", isLoading)
	//console.log("pendingConnector: ", pendingConnector)


	const [address1, setAddress] = useState("")
	const [isConnecting1, setIsConnecting] = useState(false)
	const [isDisconnected1, setIsDisconnected] = useState(false)
	const [status1, setStatus] = useState("")
	const [activeConnector1, setActiveConnector] = useState({})
	//const [connect1, setConnect] = useState({})
	//const [connectors1, setConnectors] = useState({})
	const [data1, setData] = useState({})
	

	useEffect(() => {
		setAddress(address)
		setIsConnecting(isConnecting)
		setIsDisconnected(isDisconnected)
		setStatus(status)
		setActiveConnector(activeConnector)
		//setConnect(connect)
		//setConnectors(connectors)
		setData(data)

		, []
	})

	//const { data, isError } = useBalance({addressOrName: 'fn-2187.eth' }) // 'fn-2187.eth'  // address1

	//console.log("ActiveConnector: ", activeConnector1)
	//console.log("connectors: ", connectors1)
	//
	/*if(connect) {
		console.log("connect: ", connect1)
	} */

	// <div>Connect: {connect1["name"]}</div><br></br>
	//	<div>Connectors: {connectors1["name"]}</div><br></br>
	// <div>Active Connector: {activeConnector1["name"]}</div><br></br>

	/*
	const { data, isError, isLoading } = useBalance({
    addressOrName: 'awkweb.eth',
	})

	if (isLoading) return <div>Fetching balance…</div>
	if (isError) return <div>Error fetching balance</div>
	return (
		<div>
		Balance: {data?.formatted} {data?.symbol}
		</div>
	) */

	/*if(provider) {
		console.log("provider: ", provider)
	} */

	if(data) {
		console.log("msg_data: ", data)
	}

	if (isConnecting1) return <div>Connecting…</div>
	if (isDisconnected1) return <div>Disconnected</div>
	//if (isError) return <div>Error fetching balance</div>
	//if (activeConnector1) return <div>{activeConnector1["name"]}</div>
	// Balance: {data?.formatted} {data?.symbol}

	// Balance: {data1["formatted"]} {data1["symbol"]} <br></br>
	

	return (
		<div>
		
		<Flex alignItems='center' justifyContent='center'>
			<Container>

			

			<div>Wallet Address: {address1}</div><br></br>
			<div>Status: {status1}</div><br></br>
			{activeConnector1 && <h1>Active Connector: {activeConnector1["name"]}</h1>}<br></br>

			

			<div>
			<Text mb='8px'>Value: {value}</Text>
			<Input
				value={value}
				onChange={handleChange}
				placeholder='Enter You Message'
				size='lg'
			/>
			

			<button disabled={isLoading} onClick={() => signMessage({message: value})}>
				Sign message
			</button>
			{isSuccess && <div>Signature: {data}</div>}
			{isError && <div>Error signing message</div>}
			</div>

			{data && (
			<div>
				<div>Recovered Address: {recoveredAddress.current}</div>
				<div>Signature: {data}</div>
			</div>
			)}
			
			
			</Container>
		</Flex>
		</div>
		
	)
}

export default Home


  

  /*return (
    <>
      {isConnected && <div>Connected to {activeConnector.name}</div>}

      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {isLoading &&
            pendingConnector?.id === connector.id &&
            ' (connecting)'}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </>
  )
} */

/*function App() {
  const { address, isConnecting, isDisconnected } = useAccount()
  

  if (isConnecting) return <div>Connecting…</div>
  if (isDisconnected) return <div>Disconnected</div>
  return <div>{address}</div>
}  */

/*
const Home: FC = () => {

	const { address, isConnecting, isDisconnected, status } = useAccount()
	const { connector: activeConnector, isConnected } = useAccount()
	const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

	//console.log("activeConnector: ", activeConnector)
	//console.log("isConnected: ", isConnected)

	//console.log("connect: ", connect)
	//console.log("connectors: ", connectors)
	//console.log("error: ", error)
	//console.log("isLoading: ", isLoading)
	//console.log("pendingConnector: ", pendingConnector)



	//if (isConnecting) return <div>Connecting…</div>
	//if (isDisconnected) return <div>Disconnected</div>

	// returm <div>{status}</div>
	// return <div>{address}</div>

	/*return
	
	</div> */
/*
	return (
		<>
		{isConnected && <div>Connected to {activeConnector.name}</div>}

		{connectors.map((connector) => (
			<button
			disabled={!connector.ready}
			key={connector.id}
			onClick={() => connect({ connector })}
			>
			{connector.name}
			{isLoading &&
				pendingConnector?.id === connector.id &&
				' (connecting)'}
			</button>
		))}

		{error && <div>{error.message}</div>}
		</>
		
	)
}

export default Home */

	
	//return <div>{address}</div>
	/*return <div>{Connector}</div> */
	

	/*{
		address?: string
		connector?: Connector
		isConnecting: boolean
		isReconnecting: boolean
		isConnected: boolean
		isDisconnected: boolean
		status: 'connecting' | 'reconnecting' | 'connected' | 'disconnected'
	  } */

	


	/*return (
		
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			<div className="absolute top-6 right-6">
				<ConnectWallet />
			</div>
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
				<div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
					<h1 className="text-6xl font-bold dark:text-white">{APP_NAME}</h1>
				</div>

				<div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
					<div className="grid grid-cols-1 md:grid-cols-2">
						<div className="p-6">
							<div className="flex items-center">
								<BookOpenIcon className="w-8 h-8 text-gray-500" />
								<div className="ml-4 text-lg leading-7 font-semibold">
									<a
										href="https://laravel.com/docs"
										className="underline text-gray-900 dark:text-white"
									>
										Next.js Docs
									</a>
								</div>
							</div>

							<div className="ml-12">
								<div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
									Next.js gives you the best developer experience with all the features you need for
									production: hybrid static &amp; server rendering, TypeScript support, smart
									bundling, route pre-fetching, and more. No config needed.
								</div>
							</div>
						</div>

						<div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
							<div className="flex items-center">
								<BookOpenIcon className="w-8 h-8 text-gray-500" />
								<div className="ml-4 text-lg leading-7 font-semibold">
									<a href="https://wagmi.sh" className="underline text-gray-900 dark:text-white">
										wagmi Docs
									</a>
								</div>
							</div>

							<div className="ml-12">
								<div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
									wagmi is a collection of React Hooks containing everything you need to start working
									with Ethereum. wagmi makes it easy to display ENS and balance information, sign
									messages, interact with contracts, and much more — all with caching, request
									deduplication, and persistence.
								</div>
							</div>
						</div>

						<div className="p-6 border-t border-gray-200 dark:border-gray-700">
							<div className="flex items-center">
								<BookOpenIcon className="w-8 h-8 text-gray-500" />
								<div className="ml-4 text-lg leading-7 font-semibold">
									<a
										href="https://laravel-news.com/"
										className="underline text-gray-900 dark:text-white"
									>
										Tailwind Docs
									</a>
								</div>
							</div>

							<div className="ml-12">
								<div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
									Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of
									the building blocks you need to build bespoke designs without any annoying
									opinionated styles you have to fight to override.
								</div>
							</div>
						</div>

						<div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
							<div className="flex items-center">
								<CodeIcon className="w-8 h-8 text-gray-500" />
								<div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
									About this Template
								</div>
							</div>

							<div className="ml-12">
								<div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
									This starter kit is composed of{' '}
									<a href="https://nextjs.org" className="underline" target="_blank" rel="noreferrer">
										Next.js
									</a>{' '}
									and{' '}
									<a
										href="https://tailwindcss.com"
										className="underline"
										target="_blank"
										rel="noreferrer"
									>
										Tailwind CSS
									</a>
									, with{' '}
									<a
										href="https://docs.family.co/connectkit"
										className="underline"
										target="_blank"
										rel="noreferrer"
									>
										ConnectKit
									</a>
									,{' '}
									<a href="https://ethers.org" className="underline" target="_blank" rel="noreferrer">
										ethers
									</a>{' '}
									&amp;{' '}
									<a href="https://wagmi.sh" className="underline" target="_blank" rel="noreferrer">
										wagmi
									</a>{' '}
									for all your web3 needs. It uses{' '}
									<a
										href="https://www.typescriptlang.org/"
										className="underline"
										target="_blank"
										rel="noreferrer"
									>
										Typescript
									</a>{' '}
									and an opinionated directory structure for maximum dev confy-ness. Enjoy!
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center mt-4 sm:items-center sm:justify-between">
					<div className="text-center text-sm text-gray-500 sm:text-left">
						<div className="flex items-center">
							<ShareIcon className="-mt-px w-5 h-5 text-gray-400" />

							<a href="https://twitter.com/m1guelpf" className="ml-1 underline">
								Share
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)  */

