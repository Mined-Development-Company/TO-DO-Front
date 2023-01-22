import React from 'react'
import { App } from './App'
import ReactDOM from 'react-dom/client'
import Theme from './styles/ThemeStyles'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Theme>
			<GlobalStyles />
			<App />
		</Theme>
	</React.StrictMode>
)
