import React, { useEffect, useState, useContext } from 'react'
import { toast } from 'react-toastify'
import { AiOutlinePlus } from 'react-icons/ai'

import { AuthContext } from '../../context/AuthContext'
import { SwitchDarkMode } from '../../components/SwitchDarkMode';
import { Task } from '../../components/Task';

import { 
    Container, 
    Header,
    HeaderButtons,
    ContainerContent,
    ContainerCenter,
    Title,
    AddTask,
    AddTaskModal,
    CheckBox,
} from './styles'

export const DashboardPage = () => {
    const { logout, isDarkMode } = useContext(AuthContext);

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

    const [openNewTask, setOpenNewTask] = useState(false);

    const HandleLogout = () => {
        logout();
        toast.success('Até mais tarde!')
    }

    const HandleAddTask = (event) => {

        if(event.key === 'Enter') {
            setTasks(prevState => ([...prevState, newTask]));
            setNewTask(prevState => ({...prevState, title: ''}));
        }
    }

    const HandleDeleteTask = (indexTask) => {
        const newList = tasks.filter((_, index) => index !== indexTask);
        setTasks(newList)
    }

    return (
        <>
            <Container>
                <Header>
                    {isDarkMode ? <img src='/Logo.svg' alt='Logo ToDO' /> : <img src='/LogoWhite.svg' alt='Logo ToDO' />}
                    

                    <HeaderButtons>
                        <SwitchDarkMode />
                        
                        <img onClick={HandleLogout} src="/Logout.svg" alt="Deslogar" />
                    </HeaderButtons>
                </Header>

                <ContainerContent>
                    <ContainerCenter>
                        <Title>ToDo</Title>

                        <AddTask opened={openNewTask} onClick={() => setOpenNewTask(prevState => !prevState)}>
                            <div className="plus-button">
                                <AiOutlinePlus
                                    size={24}
                                    color={isDarkMode ? '#000000' : '#FFFFFF'}
                                />
                            </div>
                            Adicionar tarefa
                        </AddTask>
                        {
                            openNewTask && (
                                <AddTaskModal>
                                    <div>
                                        <p className="title">Nome da tarefa</p>
                                        <p className="subtitle">Adicione novas tarefas à sua lista e organize seu dia com facilidade.</p>
                                        <input className='input' type="text" placeholder='Nome' onKeyDown={HandleAddTask} value={newTask.title} onChange={(e) => setNewTask(prevState => ({...prevState, title: e.target.value}))} />
                                        <button className='button' onClick={HandleAddTask}>ADICIONAR TAREFA</button>
                                    </div>
                                    <div>
                                        <CheckBox importance={0} />
                                        <CheckBox importance={1} />
                                        <CheckBox importance={2} />
                                    </div>

                                </AddTaskModal>
                            )
                        }

                        <Title>Tarefas - {tasks.length}</Title>
                        {
                            tasks.length > 0 ? tasks.map((e, index) => (

                                <Task importance={e.importance} title={e.title} key={index} delete={() => HandleDeleteTask(index)} />

                            )) : 'Sem tasks'
                        }
                    </ContainerCenter>

                </ContainerContent>

            </Container>
        </>
    )
}