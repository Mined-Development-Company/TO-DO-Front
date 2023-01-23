import React, {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import API from '../../util/api';

const BoxLogin = styled.div`
	width: 100%;
	max-width: 600px;
	height: auto;
    padding-bottom: 73px;

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
		margin: 18px 0 18px 18px;
		color: ${({ theme }) => theme.colors.CinzaText};
		font-size: 14px;
		text-align: right;
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

const MessageBox = styled.div`
    width: 100%;
    height: 50px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    border-radius: 10px;
    margin-bottom: 14px;
`;

const MessageErrorBox = styled.div`
    width: 100%;
    height: 50px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;
    border-radius: 10px;
    margin-bottom: 14px;
`;

export const RegisterForm = () => {
	const [form, setForm] = useState({
        name: '',
		email: '',
		password: ''
	});
    const [error, setError] = useState('');
    const [isLogged, setIsLogged] = useState(false);

	const navigate = useNavigate();

	async function submitRegister(e) {
		e.preventDefault();
        setError('');
        try {
            const data = await API.post('/register', {
                ...form
            })

            console.log(data)

            setIsLogged(true);

        }
        catch(e) {
            console.log('error', e);
            setError('Algo deu errado, por favor tente novamente.')
        }

	}

	return (
		<>
			<BoxLogin>
				<img src='/Logo.svg' alt='Logo ToDO' />
				<form onSubmit={submitRegister}>
                    <label htmlFor='name'>Nome</label>
					<input value={form.name} onChange={e => setForm(prevState => ({ ...prevState, name: e.target.value }))} id='name' type='text' placeholder='Nome' required />
					<label htmlFor='email'>Email</label>
					<input value={form.email} onChange={e => setForm(prevState => ({ ...prevState, email: e.target.value }))} id='email' type='email' placeholder='Email' required />
					<label htmlFor='password'>Senha</label>
					<input value={form.password} onChange={e => setForm(prevState => ({ ...prevState, password: e.target.value }))} id='password' type='password' placeholder='Senha' required />

					<h1>
						Já tem uma conta? <a onClick={() => navigate('/')} >Entre</a>
					</h1>

                    {
                        error.length > 0 && <MessageErrorBox>{error}</MessageErrorBox>
                    }

                    {
                        isLogged ? <MessageBox>Conta criada com sucesso, já é possivel <a onClick={() => navigate('/')}>entrar</a></MessageBox> : <ButtonSubmit type='submit'>SUBMIT</ButtonSubmit>
                    }
					
				</form>
			</BoxLogin>
		</>
	)
}
