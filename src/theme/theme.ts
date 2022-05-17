import type { FlattenSimpleInterpolation } from 'styled-components';

import { colors } from './colors';
import { typography } from './typography';

export const theme: DesignSystem = {
	typography,
	colors,
}

export interface DesignSystem {
	typography: TypographyStyles;
	colors: UIColors;
}

export interface UIColors {
	text: string;
	textDanger: string;
	textMinor: string;
	background: string;

	// Note: here could go many more ...
	// leaving this as an example as it's a small repo and I can't build a whole design-system for it
}

export type TypographyType =
	| 'heading'
	| 'body'
	| 'bodyBold'
	| 'bodySmall'
	| 'bodySmallBold'
	| 'label'
;

export type TypographyStyles = Record<TypographyType, FlattenSimpleInterpolation>;
