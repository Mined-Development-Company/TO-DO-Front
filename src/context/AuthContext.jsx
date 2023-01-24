import React, { useState } from 'react'
import API from '../util/api'
import { useMutation, useQueryClient } from 'react-query'

export const AuthContext = React.createContext()

export const AuthProvider = (props) => {
	const userToken = localStorage.getItem('token');

	const [isLogged, setIsLogged] = useState(userToken ? true : false);

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

	return <AuthContext.Provider value={{ signIn, signUp, isLogged }}>{props.children}</AuthContext.Provider>
}
