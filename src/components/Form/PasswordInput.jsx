import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export const PasswordInput = ({ placeholder, icon: Icon, ...rest }) => {
	const [showPassword, setShowPassword] = useState(false)
	return (
		<Container>
			<input type={showPassword ? 'text' : 'password'} placeholder={placeholder} {...rest} />
			{showPassword ? (
				<AiFillEyeInvisible
					size={24}
					color={'#B8B8B8'}
					onClick={() => {
						setShowPassword(!showPassword)
					}}
				/>
			) : (
				<AiFillEye
					size={24}
					color={'#B8B8B8'}
					onClick={() => {
						setShowPassword(!showPassword)
					}}
				/>
			)}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.colors.White};
	border-radius: 10px;
	width: 100%;
	input {
		padding: 23px 24px;
		border-radius: 10px;
		border: none;
		width: 100%;
		&:focus {
			outline: none;
		}
	}
	svg {
		margin-right: 23px;
		cursor: pointer;
	}
`
