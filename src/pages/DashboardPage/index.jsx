import React, { useEffect, useState } from 'react'

import { SwitchDarkMode } from '../../components/SwitchDarkMode';
import { Task } from '../../components/Task';

import { 
    Container, 
    Header,
    HeaderButtons,
} from './styles'

export const DashboardPage = () => {

    return (
        <>
            <Container>
                <Header>
                    <img src='/Logo.svg' alt='Logo ToDO' />

                    <HeaderButtons>
                        <SwitchDarkMode />
                        
                        <img src="/Logout.svg" alt="Deslogar" />
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