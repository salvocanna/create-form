import styled from 'styled-components';

const Input = styled.input`
	${p => p.theme.typography.body};
	background: #FFFFFF;
	color: #050224;
	border: 1px solid #C4C4CF;

	min-width: 0;
	width: -webkit-fill-available;

	padding: 12px;
	border-radius: 10px;
	transition: all 100ms;

	&:hover {
		border: 1px solid #050224;
	}

	&:focus {
		outline: none;
		border: 1px solid #6544E2;
	}

	&[type='text'], &[type='email'], &[type='number'] {
		appearance: none;
	}

	&[aria-invalid="true"] {
		&, &:focus, &:hover {
			border: 1px solid #E72E50;
		}
	}
`;

export default Input;
