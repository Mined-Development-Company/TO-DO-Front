import React, { useEffect, useState, useContext } from 'react'
import { toast } from 'react-toastify'
import { AiOutlinePlus, AiFillCloseCircle } from 'react-icons/ai'

import { AuthContext } from '../../context/AuthContext'
import { SwitchDarkMode } from '../../components/SwitchDarkMode'
import { Task } from '../../components/Task'
import { Head } from '../../util/Head'

import {
	Container,
	Header,
	HeaderButtons,
	ContainerContent,
	ContainerCenter,
	Title,
	AddTask,
	AddTaskModal,
	CheckBoxToCreate
} from './styles'

export const DashboardPage = () => {
	const {
		logout,
		isDarkMode,
		createTask,
		userTasks,
		getTasks,
		deleteTask,
		updateTask,
		page,
		setPage,
		qtyPage,
		setQtyPage
	} = useContext(AuthContext)

	const totalTasks = userTasks[0]
	const totalPages = Math.ceil(totalTasks / qtyPage)

	const [newTask, setNewTask] = useState({
		priority: 1,
		title: '',
		completed: false
	})

	const [openNewTask, setOpenNewTask] = useState(false)

	const HandleLogout = () => {
		logout()
		toast.success('Até mais tarde!')
	}

	const HandleAddTask = async () => {
		try {
			await toast
				.promise(createTask(newTask), {
					pending: 'Aguarde',
					success: {
						render({ data }) {
							const { message } = data.data
							return message ? message : 'Tarefa adicionada!'
						}
					},
					error: {
						render({ data }) {
							const { message } = data.response.data
							return message ? message : 'Algo deu errado, por favor tente novamente.'
						}
					}
				})
				.then(() => getTasks())
			setNewTask((prevState) => ({ ...prevState, title: '' }))
		} catch {}
	}

	const HandleAddTaskKeyboard = (event) => {
		if (event.key === 'Enter') {
			HandleAddTask()
		}
	}

	const HandleDeleteTask = async (taskId) => {
		try {
			await toast
				.promise(deleteTask(taskId), {
					pending: 'Aguarde',
					success: {
						render({ data }) {
							const { message } = data.data
							return message ? message : 'Tarefa adicionada!'
						}
					},
					error: {
						render({ data }) {
							const { message } = data.response.data
							return message ? message : 'Algo deu errado, por favor tente novamente.'
						}
					}
				})
				.then(() => getTasks())
		} catch {}
	}

	const HandleMarkComplete = async (taskId) => {
		updateTask(taskId)
	}

	const HandleChangeSelect = (event) => {
		setQtyPage(event.target.value)
	}

	return (
		<>
			<Container>
				<Head title='Dashboard' />
				<Header>
					{isDarkMode ? <img src='/Logo.svg' alt='Logo ToDO' /> : <img src='/LogoWhite.svg' alt='Logo ToDO' />}

					<HeaderButtons>
						<SwitchDarkMode />

						<img onClick={HandleLogout} src='/Logout.svg' alt='Deslogar' />
					</HeaderButtons>
				</Header>

				<ContainerContent>
					<ContainerCenter>
						<Title>ToDo</Title>
						<AddTask opened={openNewTask} onClick={() => setOpenNewTask((prevState) => !prevState)}>
							<div className='plus-button'>
								<AiOutlinePlus size={24} color={isDarkMode ? '#000000' : '#FFFFFF'} />
							</div>
							Adicionar tarefa
						</AddTask>
						{openNewTask && (
							<AddTaskModal>
								<div className='left-block'>
									<p className='title'>Nome da tarefa</p>
									<p className='subtitle'>Adicione novas tarefas à sua lista e organize seu dia com facilidade.</p>
									<input
										className='input'
										type='text'
										placeholder='Nome'
										onKeyDown={HandleAddTaskKeyboard}
										value={newTask.title}
										onChange={(e) => setNewTask((prevState) => ({ ...prevState, title: e.target.value }))}
									/>
									<div className='right-block'>
										<span className='options'>
											<CheckBoxToCreate
												priority={1}
												checked={newTask.priority == 1}
												onChange={() => setNewTask((prevState) => ({ ...prevState, priority: 1 }))}
											/>
											Urgente
										</span>
										<span className='options'>
											<CheckBoxToCreate
												priority={2}
												checked={newTask.priority == 2}
												onChange={() => setNewTask((prevState) => ({ ...prevState, priority: 2 }))}
											/>
											Importante
										</span>
										<span className='options'>
											<CheckBoxToCreate
												priority={3}
												checked={newTask.priority == 3}
												onChange={() => setNewTask((prevState) => ({ ...prevState, priority: 3 }))}
											/>
											Não urgente
										</span>
									</div>
									<button className='button' onClick={HandleAddTask}>
										ADICIONAR TAREFA
									</button>
								</div>
								<div className='close-modal' onClick={() => setOpenNewTask((prevState) => !prevState)}>
									<AiFillCloseCircle size={24} color={'#194FD9'} />
								</div>
							</AddTaskModal>
						)}
						<Title>
							{userTasks[0]} {userTasks[0] == 1 ? 'Tarefa' : 'Tarefas'}{' '}
							{userTasks[0] !== 0 ? `- Página ${page} de ${totalPages}` : ``}
						</Title>
						Exibir:
						<select onChange={HandleChangeSelect} defaultValue={qtyPage}>
							<option value='5'>5</option>
							<option value='10'>10</option>
							<option value='15'>15</option>
						</select>
						{userTasks[0] > 0
							? userTasks[1].map((e, index) => (
									<Task
										priority={e.priority}
										title={e.title}
										completed={e.completed}
										key={index}
										delete={() => HandleDeleteTask(e.id)}
										markComplete={() => HandleMarkComplete(e.id)}
									/>
							  ))
							: 'Sem tasks'}
						{userTasks[0] !== 0 && page > 1 ? (
							<button
								onClick={() => {
									setPage(page - 1)
								}}>
								Anterior
							</button>
						) : (
							''
						)}
						{userTasks[0] === 0 || page === totalPages ? (
							''
						) : (
							<button
								onClick={() => {
									setPage(page + 1)
								}}>
								Próximo
							</button>
						)}
					</ContainerCenter>
				</ContainerContent>
			</Container>
		</>
	)
}
