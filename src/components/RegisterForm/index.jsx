import React, { useState, useContext } from 'react'
import API from '../../util/api'
import * as Styled from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { PuffLoader } from 'react-spinners'
import { AuthContext } from '../../context/AuthContext'
import { PasswordInput } from '../Form/PasswordInput'

export const RegisterForm = () => {
	const { signUp } = useContext(AuthContext);
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: ''
	})

	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()

	async function submitRegister(e) {
		e.preventDefault()
		setIsLoading(true)

		try {
			const data = await toast.promise(
				signUp(form),
				{
					pending: 'Aguarde',
					success: 'Registrado com sucesso! Por favor faça o login.',
					error: {
						render({data}) {
							setIsLoading(false)
							const { message } = data.response.data;
							return  message ? message : 'Algo deu errado, por favor tente novamente.';
						}
					}
				)
				.then(() => navigate('/'))
		} catch {}

		setIsLoading(false)
	}

	return (
		<>
			<Styled.BoxLogin>
				<img src='/Logo.svg' alt='Logo ToDO' />
				<form onSubmit={submitRegister}>
					<label htmlFor='name'>Nome</label>
					<input
						value={form.name}
						onChange={(e) => setForm((prevState) => ({ ...prevState, name: e.target.value }))}
						id='name'
						type='text'
						placeholder='Nome'
						required
					/>
					<label htmlFor='email'>Email</label>
					<input
						value={form.email}
						onChange={(e) => setForm((prevState) => ({ ...prevState, email: e.target.value }))}
						id='email'
						type='email'
						placeholder='Email'
						required
					/>
					<label htmlFor='password'>Senha</label>
					<PasswordInput
						value={form.password}
						onChange={(e) => setForm((prevState) => ({ ...prevState, password: e.target.value }))}
						id='password'
						placeholder='Senha'
						required
					/>

					<h1>
						Já tem uma conta? <Link to='/'>Entre</Link>
					</h1>

					<Styled.ButtonSubmit type='submit' disabled={isLoading}>
						{isLoading ? <PuffLoader color='#FFF' size={30} /> : 'REGISTRAR'}
					</Styled.ButtonSubmit>
				</form>
			</Styled.BoxLogin>
		</>
	)
}
