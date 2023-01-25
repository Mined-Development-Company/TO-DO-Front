import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ThemeProvider } from 'styled-components'

const darkMode = localStorage.getItem('darkmode')

const isModeDark = darkMode ? JSON.parse(darkMode) : true

const darkTheme = {
	colors: {
		Primary: '#194FD9',
		White: '#ffffff',
		Bg: '#181820',
		TextBase: '#fff',
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

const whiteTheme = {
	colors: {
		Primary: '#194FD9',
		White: '#ffffff',
		Bg: '#CFCFCF',
		Cinza: '#B3B3B3',
		TextBase: '#21212B',
		AzulEscuro: '#CFCFCF',
		CinzaEscuro: '#FFFFFF',
		CinzaText: '#000000'
	},
	container: {
		maxWidth: '1400px',
		padding: '0 1rem',
		margin: '0 auto'
	}
}

const Theme = ({ children }) => {
	const { isDarkMode } = useContext(AuthContext)

	return <ThemeProvider theme={isDarkMode ? darkTheme : whiteTheme}>{children}</ThemeProvider>
}

export default Theme
