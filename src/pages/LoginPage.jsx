import React from 'react'
import styled from 'styled-components'
import { LoginForm } from '../components/LoginForm'

const StyledMain = styled.main`
	background-color: ${({ theme }) => theme.colors.White};
	background-image: url(/Gradient.svg);
	background-size: 100%;
	background-position: center;

	width: 100%;
	max-width: 1444px;
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

export const LoginPage = () => {
	return (
		<StyledMain>
			<LoginForm />
		</StyledMain>
	)
}
