const offset = 127397;

export const getFlagEmoji = (countryCode: string) => {
	const codePoints = countryCode.toUpperCase()
		.split('')
		.map(c => offset + c.charCodeAt(0));

	return String.fromCodePoint(...codePoints);
}
