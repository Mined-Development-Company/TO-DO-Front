import React, { useState, useEffect } from 'react'
import API from '../util/api'
import { useMutation, useQueryClient } from 'react-query'

export const AuthContext = React.createContext()

export const AuthProvider = (props) => {
	const userToken = localStorage.getItem('token')
	const darkMode = localStorage.getItem('darkmode')
	const userHaveTasks = localStorage.getItem('tasks')

	const [isLogged, setIsLogged] = useState(userToken ? true : false)
	const [isDarkMode, setIsDarkMode] = useState(darkMode ? JSON.parse(darkMode) : true)
	const [userTasks, setUserTasks] = useState(userHaveTasks ? JSON.parse(userHaveTasks) : [])
	const [page, setPage] = useState(1)
	const [qtyPage, setQtyPage] = useState(5)

	useEffect(() => {
		localStorage.setItem('darkmode', JSON.stringify(isDarkMode))
	}, [isDarkMode])

	useEffect(() => {
		if (isLogged) {
			getTasks()
		}
	}, [userToken])

	useEffect(() => {
		if (isLogged) {
			getTasks()
		}
	}, [page, qtyPage])

	const queryClient = useQueryClient()

	const { mutateAsync: signIn } = useMutation((user) => API.post('/login', user), {
		onSuccess: ({ data }) => {
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

	const { mutateAsync: getTasks } = useMutation(() => API.get(`/tasks?page=${page}&qty=${qtyPage}`), {
		onSuccess: ({ data }) => {
			setUserTasks(data)
			localStorage.setItem('tasks', JSON.stringify(data))

			queryClient.invalidateQueries('user')
		},
		onError: (error) => {
			// console.log(error)
		}
	})

	const { mutateAsync: createTask } = useMutation((task) => API.post('/tasks', task), {
		onSuccess: () => {
			getTasks()
			queryClient.invalidateQueries('user')
		},
		onError: (error) => {
			// console.log(error)
		}
	})

	const { mutateAsync: deleteTask } = useMutation((taskId) => API.delete(`/tasks/${taskId}`), {
		onSuccess: () => {
			getTasks()
			queryClient.invalidateQueries('user')
		},
		onError: (error) => {
			// console.log(error)
		}
	})

	const { mutateAsync: updateTask } = useMutation((taskId) => API.put(`/tasks/${taskId}`), {
		onSuccess: () => {
			getTasks()
			queryClient.invalidateQueries('user')
		},
		onError: (error) => {
			// console.log(error)
		}
	})

	const logout = () => {
		localStorage.clear()
		setIsLogged(false)
	}

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signUp,
				getTasks,
				createTask,
				deleteTask,
				updateTask,
				userTasks,
				isLogged,
				logout,
				isDarkMode,
				setIsDarkMode,
				page,
				setPage,
				qtyPage,
				setQtyPage
			}}>
			{props.children}
		</AuthContext.Provider>
	)
}
