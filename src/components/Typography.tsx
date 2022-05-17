import type { Property } from 'csstype';
import styled from 'styled-components';

import type { TypographyType, UIColors } from '../theme/theme';

interface TypographyTypeProps {
	$type?: TypographyType;
	$color?: keyof UIColors;
	$display?: Property.Display;
	$textAlign?: Property.TextAlign;
}

type TypographyProps = TypographyTypeProps;

export const Typography = styled.div<TypographyProps>`
	${p => p.theme.typography[p.$type ?? 'body']};

	color: ${p => p.theme.colors[p.$color ?? 'text']};
	${p => p.$display && `display: ${p.$display}`};
	${p => p.$textAlign ? `text-align: ${p.$textAlign}` : ''};
`;

export default Typography;
