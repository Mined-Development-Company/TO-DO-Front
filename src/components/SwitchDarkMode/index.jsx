import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'
import { ContainerSwitch } from './styles';

export const SwitchDarkMode = () => {
    const { isDarkMode, setIsDarkMode } = useContext(AuthContext);

    return (
        <ContainerSwitch>
            <label className="switch" title='Alternar tema claro/escuro'>
                <input type="checkbox" checked={!isDarkMode} onChange={e => setIsDarkMode(prevState => !prevState)} />
                <span className="slider"></span>
            </label>
        </ContainerSwitch>
    )
}