import React from 'react'
import { LoginPage } from './pages/LoginPage'
import { Routes, Route } from 'react-router-dom'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<LoginPage />} />
		</Routes>
	)
}
