import { css } from 'styled-components';

import { TypographyStyles } from './theme';

export const typography: TypographyStyles = {
	heading: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;

		font-size: 24px;
		line-height: 32px;

		@media (min-width: 768px) {
			font-size: 32px;
			line-height: 36px;
		}
	`,
	body: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;

		font-size: 16px;
		line-height: 24px;
	`,
	bodyBold: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;

		font-size: 16px;
		line-height: 24px;
	`,
	bodySmall: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 400;

		font-size: 14px;
		line-height: 20px;
	`,
	bodySmallBold: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;

		font-size: 14px;
		line-height: 20px;
	`,
	label: css`
		font-family: 'Open Sans', sans-serif;
		font-weight: 600;

		font-size: 16px;
		line-height: 20px;
	`,
};
