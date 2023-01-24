import React from 'react';
import { ContainerSwitch } from './styles';

export const SwitchDarkMode = () => {

    return (
        <ContainerSwitch>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
        </ContainerSwitch>
    )
}