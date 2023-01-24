import React from 'react';
import { ContainerSwitch } from './styles';

export const SwitchDarkMode = () => {

    return (
        <ContainerSwitch>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
        </ContainerSwitch>
    )
}