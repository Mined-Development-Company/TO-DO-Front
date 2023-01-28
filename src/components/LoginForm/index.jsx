import React, { useContext, useState } from 'react'
import API from '../../util/api'
import * as Styled from './styles'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { PuffLoader } from 'react-spinners'
import { AuthContext } from '../../context/AuthContext'
import { PasswordInput } from '../Form/PasswordInput'

export const LoginForm = () => {
	const { signIn } = useContext(AuthContext)
	const [form, setForm] = useState({
		email: '',
		password: ''
	})

	const [isLoading, setIsLoading] = useState(false)

	async function submitLogin(e) {
		e.preventDefault()
		setIsLoading(true)

		try {
			const data = await toast.promise(signIn(form), {
				pending: 'Aguarde',
				success: 'Logado com sucesso!',
				error: {
					render({ data }) {
						setIsLoading(false)
						const { message } = data.response.data
						return message ? message : 'Algo deu errado, por favor tente novamente.'
					}
				}
			})
		} catch {}

		setIsLoading(false)
	}

	const { isDarkMode } = useContext(AuthContext)

	return (
		<>
			<Styled.BoxLogin isDark={isDarkMode}>
				{isDarkMode ? <img src='/Logo.svg' alt='Logo ToDO' /> : <img src='/LogoWhite.svg' alt='Logo ToDO' />}
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
					<PasswordInput
						value={form.password}
						onChange={(e) => setForm((prevState) => ({ ...prevState, password: e.target.value.toString() }))}
						id='password'
						placeholder='Senha'
						required
					/>

					<h1>
						Não está cadastrado? <Link to='/register'>Registre-se</Link>
					</h1>

					<Styled.ButtonSubmit type='submit' disabled={isLoading}>
						{isLoading ? <PuffLoader color='#FFF' size={30} /> : 'ENTRAR'}
					</Styled.ButtonSubmit>
				</form>
			</Styled.BoxLogin>
		</>
	)
}
