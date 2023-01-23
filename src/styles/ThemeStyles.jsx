import { ThemeProvider } from 'styled-components'

const theme = {
	colors: {
		Primary: '#194FD9',
		White: '#ffffff',
		Bg: '#181820',
		Cinza: '#B8B8B8',
		AzulEscuro: '#181820',
		CinzaEscuro: '#21212B',
		CinzaText: '#A8A8A8'
	},
	container: {
		maxWidth: '1400px',
		padding: '0 1rem',
		margin: '0 auto'
	}
}

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Theme
