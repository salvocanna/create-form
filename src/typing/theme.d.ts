import { DesignSystem } from '../theme/theme';

declare module 'styled-components' {
	interface DefaultTheme extends DesignSystem {}
}
