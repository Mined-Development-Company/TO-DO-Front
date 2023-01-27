import styled from 'styled-components'

export const Container = styled.main`
	font-family: 'Poppins';
`

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
	height: 70px;
	background-color: ${({ theme }) => theme.colors.CinzaEscuro};
`

export const HeaderButtons = styled.div`
	display: flex;
	align-items: center;
	gap: 33px;

	img {
		cursor: pointer;
	}
`

export const ContainerContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 20px;
`

export const ContainerCenter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 611px;
	width: 100%;
	gap: 12px;
`

export const Title = styled.p`
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 30px;
	letter-spacing: -0.015em;

	color: ${({ theme }) => theme.colors.CinzaText};
	width: 100%;
	margin-bottom: 20px;
`

export const AddTask = styled.div`
	background-color: ${({ theme }) => theme.colors.CinzaEscuro};
	height: 54px;
	border: 0.3px solid #21212b;
	border-radius: 20px;
	display: flex;
	gap: 15px;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	cursor: pointer;
	align-self: flex-start;
	color: ${({ theme }) => theme.colors.TextBase};

	${({ opened }) => {
		return opened && 'text-decoration: underline'
	}};

	.plus-button {
		background: #194fd9;
		border-radius: 6.5px;
		width: 24px;
		height: 24px;
	}
`

export const AddTaskModal = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.CinzaEscuro};
	padding: 20px 50px;
	position: relative;
	border-radius: 13px;

	display: flex;
	flex-direction: column;

	.left-block,
	.right-block {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.right-block {
		display: flex;
		flex-direction: row;
		gap: 30px;

		.options {
			display: flex;
			gap: 10px;
			align-items: center;
			color: ${({ theme }) => theme.colors.TextBase};
		}
	}

	.title {
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 24px;
		color: ${({ theme }) => theme.colors.Primary};
	}

	.subtitle {
		color: ${({ theme }) => theme.colors.CinzaText};
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 14px;
	}

	.input {
		background: #d5d5d5;
		border-radius: 10px;
		appearance: none;
		outline: none;
		height: 40px;
		width: 100%;
		border: none;
		padding: 0 20px;
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;
		color: #323030;
	}

	.button {
		background-color: ${({ theme }) => theme.colors.Primary};
		appearance: none;
		outline: none;
		border: none;
		margin-top: 10px;
		padding: 7px 21px;
		border-radius: 6.5px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-style: normal;
		font-weight: 600;
		font-size: 11px;
		line-height: 18px;
		width: 70%;
		cursor: pointer;

		&:hover {
			background-color: #08246c;
		}
	}

	.close-modal {
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;
	}
`

export const CheckBox = styled.input.attrs({
	type: 'checkbox'
})`
	appearance: none;
	${({ priority }) => {
		switch (priority) {
			case 0:
				return 'border: 2.5px solid #972626'
			case 1:
				return 'border: 2.5px solid #EF7028'
			case 2:
				return 'border: 2.5px solid #194FD9'
		}
	}};
	/* border: 2.5px solid #972626; */
	border-radius: 6.5px;
	width: 17px;
	min-width: 17px;
	height: 17px;
	cursor: pointer;

	&:checked {
		background-color: #00600a;
		border-color: #00600a;
	}
`

export const CheckBoxToCreate = styled.input.attrs({
	type: 'checkbox'
})`
	appearance: none;
	${({ priority }) => {
		switch (priority) {
			case 1:
				return 'border: 2.5px solid #972626'
			case 2:
				return 'border: 2.5px solid #EF7028'
			case 3:
				return 'border: 2.5px solid #194FD9'
		}
	}};
	/* border: 2.5px solid #972626; */
	border-radius: 6.5px;
	width: 25px;
	min-width: 25px;
	height: 25px;
	cursor: pointer;

	&:checked {
		${({ priority }) => {
			switch (priority) {
				case 1:
					return 'background-color: #972626'
				case 2:
					return 'background-color: #EF7028'
				case 3:
					return 'background-color: #194FD9'
			}
		}};

		background-image: url('/Checked.svg');
		background-repeat: no-repeat;
		background-position: center;
	}
`

export const Filter = styled.div`
	width: 100%;
	position: relative;
`

export const TitleFilter = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	img {
		cursor: pointer;
	}
`

export const FilterModal = styled.div`
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color: #21212b;
	border-radius: 14px;
	height: max-content;
	width: 100%;
	max-width: 163px;

	position: absolute;
	right: 38px;
	top: 0px;

	h2 {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		padding: 20px 0 0 20px;
	}

	select {
		margin: 20px 0 20px 20px;
		padding: 5px 50px 5px 10px;
		background: #d9d9d9;
		border-radius: 5px;
		font-size: 12px;
		font-weight: 600;
	}

	.filter_options {
		margin: 20px 0 0 20px;
		gap: 20px;
		display: flex;
		flex-direction: column;

		span {
			display: flex;
			align-items: center;
			gap: 10px;
			color: #adadad;
			font-family: 'Poppins';
			font-weight: 600;
			font-size: 14px;
		}
	}
`
