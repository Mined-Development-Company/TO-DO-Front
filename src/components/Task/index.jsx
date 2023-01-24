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

export const Task = ({importance = 0}) => {
    const lottierRef = useRef();
    

    return (
        <ContainerTask>
            <CheckBoxWithTitle>
                <CheckBox importance={importance} />
                <Title>
                    Minha task
                </Title>
            </CheckBoxWithTitle>

            <TrashButton onMouseEnter={() => lottierRef.current.play()} onMouseLeave={() => lottierRef.current.stop()}>
                <Lottie lottieRef={lottierRef} autoplay={false} loop={false} animationData={TrashAnimated} />
            </TrashButton>
        </ContainerTask>
    )
}