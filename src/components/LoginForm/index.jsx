import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	width: 100px;
	height: 100px;
	background-color: white;
`
const BoxLogin = styled.div`
	width: 100%;
	max-width: 700px;
	height: 560px;

	background-color: ${({ theme }) => theme.colors.CinzaEscuro};

	display: flex;
	flex-direction: column;

	align-items: center;

	border-radius: 20px;
	img {
		width: 270px;
		height: 70px;

		margin: 0 auto;
		margin: 28px 0px 31px 0px;
	}
	form {
		display: block;

		width: 100%;
		max-width: 400px;
	}
	label {
		display: block;

		margin-bottom: 14px;
		margin-top: 14px;
	}
	input {
		display: block;

		width: 100%;
		max-width: 400px;
		height: 70px;

		padding-left: 24px;

		border-radius: 10px;
	}
`
const ButtonSubmit = styled.button``
export const LoginForm = () => {
	return (
		<>
			<BoxLogin>
				<img src='/Logo.png' alt='Logo ToDO' />
				<form>
					<label htmlFor='email'>Email</label>
					<input id='email' type='email' placeholder='Email' required />

					<label htmlFor='password'>password</label>
					<input id='password' type='password' placeholder='Password' required />

					<ButtonSubmit type='submit'>Submit</ButtonSubmit>
				</form>
			</BoxLogin>
		</>
	)
}
