import React from 'react'
import styled from 'styled-components'
import { LoginForm } from '../components/LoginForm'

const StyledMain = styled.main`
	width: 100%;
	margin: 0 auto;
	padding: 0 10px;
	max-width: 1444px;

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
