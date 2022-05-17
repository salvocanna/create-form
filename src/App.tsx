import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const App: React.FunctionComponent = ({ children }) => (
	<Background>
		<Global />
		<Wrap>
			{children}
		</Wrap>
	</Background>
);

const Global = createGlobalStyle`
	body {
		margin: 0;
	}
`;

const Background = styled.div`
	min-height: 100vh;
	background-color: ${p => p.theme.colors.background};
`;

const Wrap = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 16px;
	background-color: ${p => p.theme.colors.background};
`;

export default App;
