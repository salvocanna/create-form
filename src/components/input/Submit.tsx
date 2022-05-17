import styled from 'styled-components';

const Submit = styled.input.attrs({ type: 'submit' } )`
	${p => p.theme.typography.bodyBold};
	display: block;
	color: white;
	border: none;
	background: grey;
	padding: 8px 12px;
	border-radius: 4px;
`;

export default Submit;
