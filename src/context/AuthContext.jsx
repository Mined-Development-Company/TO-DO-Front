import React, { useState, useEffect } from 'react'
import API from '../util/api'
import { useMutation, useQueryClient } from 'react-query'

export const AuthContext = React.createContext()

export const AuthProvider = (props) => {
	const userToken = localStorage.getItem('token');
	const darkMode = localStorage.getItem('darkmode');

	const [isLogged, setIsLogged] = useState(userToken ? true : false);
	const [isDarkMode, setIsDarkMode] = useState(darkMode ? JSON.parse(darkMode) : false);

	useEffect(() => {
		localStorage.setItem('darkmode', JSON.stringify(isDarkMode));
	},[isDarkMode])

	const queryClient = useQueryClient()

	const { mutateAsync: signIn } = useMutation((user) => API.post('/login', user), {
		onSuccess: ({data}) => {
			if (data.token) {
				localStorage.setItem('token', data.token)
				setIsLogged(true)
			}

			queryClient.invalidateQueries('user')
		},
		onError: (error) => {
			// console.log(error)
		}
	})

	const { mutateAsync: signUp } = useMutation((user) => API.post('/register', user), {
		onSuccess: (data) => {
			localStorage.removeItem('token')

			queryClient.invalidateQueries('user')
		},
		onError: (error) => {
			// console.log(error)
		}
	})

	const logout = () => {
		localStorage.removeItem('token');
		setIsLogged(false);
	}

	return <AuthContext.Provider value={{ signIn, signUp, isLogged, logout, isDarkMode, setIsDarkMode }}>{props.children}</AuthContext.Provider>
}
