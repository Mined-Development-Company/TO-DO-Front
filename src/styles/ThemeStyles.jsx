import { ThemeProvider } from 'styled-components'

const theme = {
	colors: {
		Primary: '#194FD9',
		White: '#ffffff',
		Bg: '#181820'
	},
	container: {
		maxWidth: '1400px',
		padding: '0 1rem',
		margin: '0 auto'
	}
}

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Theme
