import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoginPage } from './pages/LoginPage'
import GlobalStyles from './styles/GlobalStyles'
import Theme from './styles/ThemeStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Theme>
			<GlobalStyles />
			<LoginPage />
		</Theme>
	</React.StrictMode>
)
