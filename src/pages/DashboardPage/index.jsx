import React, { useEffect, useState, useContext } from 'react'
import { toast } from 'react-toastify'

import { AuthContext } from '../../context/AuthContext'
import { SwitchDarkMode } from '../../components/SwitchDarkMode'
import { Task } from '../../components/Task'

import { Container, Header, HeaderButtons, ContainerTasks } from './styles'
import { Head } from '../../util/Head'

export const DashboardPage = () => {
	const { logout } = useContext(AuthContext)

	const [tasks, setTasks] = useState([
		{
			importance: 1,
			title: 'Lembrar do que fazer',
			completed: false
		},
		{
			importance: 2,
			title: 'Lembrar fazer outra coisa',
			completed: false
		}
	])

	const [newTask, setNewTask] = useState({
		importance: 1,
		title: '',
		completed: false
	})

	const HandleLogout = () => {
		logout()
		toast.success('Até mais tarde!')
	}

	const HandleAddTask = (event) => {
		if (event.key === 'Enter') {
			setTasks((prevState) => [...prevState, newTask])
			setNewTask((prevState) => ({ ...prevState, title: '' }))
		}
	}

	const HandleDeleteTask = (indexTask) => {
		const newList = tasks.filter((_, index) => index !== indexTask)
		setTasks(newList)
	}

	return (
		<>
			<Container>
				<Head title='Dashboard' />
				<Header>
					<img src='/Logo.svg' alt='Logo ToDO' />

					<HeaderButtons>
						<SwitchDarkMode />

						<img onClick={HandleLogout} src='/Logout.svg' alt='Deslogar' />
					</HeaderButtons>
				</Header>

				<input
					type='text'
					placeholder='Nova task'
					onKeyDown={HandleAddTask}
					value={newTask.title}
					onChange={(e) => setNewTask((prevState) => ({ ...prevState, title: e.target.value }))}
				/>

				<ContainerTasks>
					{tasks.length > 0
						? tasks.map((e, index) => (
								<Task importance={e.importance} title={e.title} key={index} delete={() => HandleDeleteTask(index)} />
						  ))
						: 'Sem tasks'}
				</ContainerTasks>
			</Container>
		</>
	)
}
