import React, { useState } from 'react'
import API from '../../util/api'
import * as Styled from './styles'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
	const [form, setForm] = useState({
		email: '',
		password: ''
	})

	const [isLogged, setIsLogged] = useState(false)
	const [error, setError] = useState('')
	const [showError, setShowError] = useState(false)

	async function submitLogin(e) {
		e.preventDefault()

		try {
			const data = await API.post('/login', {
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
				<form onSubmit={submitLogin}>
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
						onChange={(e) => setForm((prevState) => ({ ...prevState, password: e.target.value.toString() }))}
						id='password'
						type='password'
						placeholder='Senha'
						required
					/>

					<h1>
						Não esta cadastrado? <Link to='/register'>Registre-se</Link>
					</h1>

					{showError ? <Styled.MessageErrorBox>{error}</Styled.MessageErrorBox> : null}

					{isLogged && <p>Logado com sucesso</p>}

					<Styled.ButtonSubmit type='submit'>SUBMIT</Styled.ButtonSubmit>
				</form>
			</Styled.BoxLogin>
		</>
	)
}
