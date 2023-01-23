import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const BoxLogin = styled.div`
	width: 100%;
	max-width: 600px;
	height: 500px;

	background-color: ${({ theme }) => theme.colors.CinzaEscuro};

	display: flex;
	flex-direction: column;

	align-items: center;

	border-radius: 20px;
	img {
		display: flex;
		object-fit: cover;

		width: 270px;
		height: 70px;

		margin: 28px 0px 0px 0px;
	}
	form {
		display: block;

		width: 100%;
		max-width: 400px;

		height: auto;

		padding: 0px 30px;
	}
	label {
		display: block;

		font-weight: 600;

		margin-bottom: 14px;
		margin-top: 14px;
	}
	input {
		display: block;

		width: 100%;
		max-width: 400px;
		height: 70px;

		font-weight: 400;

		padding-left: 24px;

		border-radius: 10px;
		border: none;
		outline: none;
	}
	h1 {
		margin: 18px;
		color: ${({ theme }) => theme.colors.CinzaText};
		font-size: 14px;
		text-align: center;
	}
	a {
		color: ${({ theme }) => theme.colors.Primary};
		cursor: pointer;
	}
`
const ButtonSubmit = styled.button`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.Primary};
	color: ${({ theme }) => theme.colors.White};
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	font-size: 17px;
	padding: 18px;
	border: none;
	border-radius: 10px;
	cursor: pointer;
`
export const LoginForm = () => {
	const [form, setForm] = useState({
		email: '',
		password: ''
	});

	const navigate = useNavigate();

	function submitLogin(e) {
		e.preventDefault();
		console.log(form);
	}

	return (
		<>
			<BoxLogin>
				<img src='/Logo.svg' alt='Logo ToDO' />
				<form onSubmit={submitLogin}>
					<label htmlFor='email'>Email</label>
					<input value={form.email} onChange={e => setForm(prevState => ({ ...prevState, email: e.target.value }))} id='email' type='email' placeholder='Email' required />
					<label htmlFor='password'>Senha</label>
					<input value={form.password} onChange={e => setForm(prevState => ({ ...prevState, password: e.target.value }))} id='password' type='password' placeholder='Senha' required />

					<h1>
						Não esta cadastrado? <a onClick={() => navigate('/register')} >Registre-se</a>
					</h1>

					<ButtonSubmit type='submit'>SUBMIT</ButtonSubmit>
				</form>
			</BoxLogin>
		</>
	)
}
