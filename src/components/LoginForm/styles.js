import styled, { css } from 'styled-components'

export const BoxLogin = styled.div`
	width: 100%;
	max-width: 600px;
	height: auto;
	padding-bottom: 73px;
	background-color: ${({ theme }) => theme.colors.CinzaEscuro};

	${(props) => {
		switch (props.isDark) {
			case false:
				return css`
					background: rgba(255, 255, 255, 0.6);
				`
		}
	}}

	display: flex;
	flex-direction: column;

	align-items: center;

	border-radius: 20px;
	img {
		display: flex;
		object-fit: cover;

		width: 270px;

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

		color: ${({ theme }) => theme.colors.TextBase};
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
export const ButtonSubmit = styled.button`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.Primary};
	color: ${({ theme }) => theme.colors.White};
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	font-size: 17px;
	padding: 0 18px;
	height: 70px;
	border: none;
	border-radius: 10px;
	cursor: pointer;

	&:hover {
		background-color: #08246c;
	}
`
