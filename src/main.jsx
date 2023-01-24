import React from 'react'
import { App } from './App'
import ReactDOM from 'react-dom/client'
import Theme from './styles/ThemeStyles'
import GlobalStyles from './styles/GlobalStyles'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthContext'
import { QueryClientProvider, QueryClient } from 'react-query'

import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Theme>
					<GlobalStyles />
					<App />
					<ToastContainer />
				</Theme>
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
