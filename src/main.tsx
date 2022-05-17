import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import Form from './containers/Form';
import { theme } from './theme/theme';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App>
				<Form />
			</App>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
