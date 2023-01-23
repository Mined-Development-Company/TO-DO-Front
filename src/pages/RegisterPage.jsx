import React from 'react'
import styled from 'styled-components'
import { RegisterForm } from '../components/RegisterForm'

const StyledMain = styled.main`
	background-color: ${({ theme }) => theme.colors.AzulEscuro};
	background-image: url(/Gradient.svg), url(/Gradient2.svg);
	background-size: 20%;

	background-position: left -70px bottom -130px, top right;
	background-repeat: no-repeat;

	width: 100%;
	min-height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	margin: 0 auto;
	padding: 0 10px;

	@media (min-width: 640px) {
		padding: 0;
	}
`

export const RegisterPage = () => {
	return (
		<StyledMain>
			<RegisterForm />
		</StyledMain>
	)
}
