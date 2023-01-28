import React, {useState, useRef} from 'react'
import Lottie from "lottie-react";
import TrashAnimated from '../../assets/trash-delete.json'

import { 
    ContainerTask, 
    CheckBoxWithTitle, 
    CheckBox, 
    Title,
    TrashButton
} from './style'

export const Task = (props) => {
    const lottierRef = useRef();
    

    return (
        <ContainerTask>
            <CheckBoxWithTitle>
                <CheckBox priority={props.priority} onChange={() => props.markComplete()} checked={props.completed} title={(props.completed) ? 'Marcar como incompleta' : 'Marcar como concluída'} />
                <Title>
                    {props.title}
                </Title>
            </CheckBoxWithTitle>

            <TrashButton onClick={props.delete} onMouseEnter={() => lottierRef.current.play()} onMouseLeave={() => lottierRef.current.stop()} title='Excluir esta tarefa' tabIndex='0'>
                <Lottie lottieRef={lottierRef} autoplay={false} loop={false} animationData={TrashAnimated} />
            </TrashButton>
        </ContainerTask>
    )
}