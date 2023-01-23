import React from 'react'
import { App } from './App'
import ReactDOM from 'react-dom/client'
import Theme from './styles/ThemeStyles'
import GlobalStyles from './styles/GlobalStyles'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Theme>
			<GlobalStyles />
			<App />
			<ToastContainer />
		</Theme>
	</React.StrictMode>
)
