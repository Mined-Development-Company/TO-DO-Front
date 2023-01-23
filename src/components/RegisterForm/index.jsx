import React, { useState } from 'react'
import API from '../../util/api'
import * as Styled from './styles'
import { Link } from 'react-router-dom'

export const RegisterForm = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: ''
	})
	const [error, setError] = useState('')
	const [showError, setShowError] = useState(false)
	const [isLogged, setIsLogged] = useState(false)

	async function submitRegister(e) {
		e.preventDefault()

		try {
			const data = await API.post('/register', {
				...form
			})

			console.log(data)

			setIsLogged(true)
		} catch (e) {
			console.log(e)
			const { message } = e.response.data
			console.log('message', message)
			setError(message)
			setShowError(true)
			setIsLogged(false)
		}
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
					<input
						value={form.password}
						onChange={(e) => setForm((prevState) => ({ ...prevState, password: e.target.value }))}
						id='password'
						type='password'
						placeholder='Senha'
						required
					/>

					<h1>
						Já tem uma conta? <Link to='/'>Entre</Link>
					</h1>

					{showError && <Styled.MessageErrorBox>{error}</Styled.MessageErrorBox>}

					{isLogged ? (
						<Styled.MessageBox>
							Conta criada com sucesso, já é possivel <Link to='/'>entrar</Link>
						</Styled.MessageBox>
					) : (
						<Styled.ButtonSubmit type='submit'>SUBMIT</Styled.ButtonSubmit>
					)}
				</form>
			</Styled.BoxLogin>
		</>
	)
}
