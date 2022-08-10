import { useTheme } from 'next-themes'
import { APP_NAME } from '@/lib/consts'
import { createClient, WagmiConfig } from 'wagmi'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'

//import { InjectedConnector } from 'wagmi/connectors/injected'
//const connector = new InjectedConnector()


const client = createClient(
	getDefaultClient({
		appName: APP_NAME,
		autoConnect: true,
		infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
	})
)

const Web3Provider = ({ children }) => {
	const { resolvedTheme } = useTheme()
	console.log("process: ", process.env.NEXT_PUBLIC_INFURA_ID)

	return (
		<WagmiConfig client={client}>
			<ConnectKitProvider mode={resolvedTheme as 'light' | 'dark'}>{children}</ConnectKitProvider>
		</WagmiConfig>
	)
}

export default Web3Provider
