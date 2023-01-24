import React, { useEffect, useState, useContext } from 'react'
import { toast } from 'react-toastify'

import { AuthContext } from '../../context/AuthContext'
import { SwitchDarkMode } from '../../components/SwitchDarkMode';
import { Task } from '../../components/Task';

import { 
    Container, 
    Header,
    HeaderButtons,
} from './styles'

export const DashboardPage = () => {
    const { logout } = useContext(AuthContext);

    const HandleLogout = () => {
        logout();
        toast.success('Até mais tarde!')
    }

    return (
        <>
            <Container>
                <Header>
                    <img src='/Logo.svg' alt='Logo ToDO' />

                    <HeaderButtons>
                        <SwitchDarkMode />
                        
                        <img onClick={HandleLogout} src="/Logout.svg" alt="Deslogar" />
                    </HeaderButtons>
                </Header>
                
                {/* <Task importance={0} />
                <Task importance={1} />
                <Task importance={2} />
                <Task importance={0} /> */}
            </Container>
        </>
    )
}