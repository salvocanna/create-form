import { getFlagEmoji } from '../emoji';

describe('emoji helper', () => {
	it('do nothing for empty strings', () => {
		expect(getFlagEmoji('')).toMatch('');
	});

	it('throws if not a string', () => {
		// @ts-ignore
		expect(() => getFlagEmoji(void 0)).toThrow();
		// @ts-ignore
		expect(() => getFlagEmoji(null)).toThrow();
		// @ts-ignore
		expect(() => getFlagEmoji(false)).toThrow();
		// @ts-ignore
		expect(() => getFlagEmoji([])).toThrow();
	});

	it('renders a valid 🇪🇸  flag for ES', () => {
		expect(getFlagEmoji('es')).toMatch('🇪🇸');
		expect(getFlagEmoji('ES')).toMatch('🇪🇸');
	});

	it('doesn\'t fail for invalid flags (`UK` is actually `GB` 🇬🇧 )', () => {
		const uk = getFlagEmoji('UK');

		expect(uk).toBeTruthy();
		expect(uk).not.toMatch('🇬🇧');
		expect(getFlagEmoji('GB')).toMatch('🇬🇧');
	});
});
