import { Config, Field, fieldsDefinition, SupportedField } from '../config';

export const getFormFields = (config: Config, countryCode: string): Record<SupportedField, Field> => {
	const commonFieldsKeys = config.commonFields ?? [];
	const countryOwnFieldsKeys = config.countries?.[countryCode]?.fields ?? [];
	const overrideFields = config.countries?.[countryCode]?.overrides;
	const overrideFieldsKeys = overrideFields ? Object.keys(overrideFields) : [];

	const names = Array.from(new Set([
		...commonFieldsKeys, ...countryOwnFieldsKeys, ...overrideFieldsKeys,
	])) as SupportedField[];

	const fieldsWithConfig = names.reduce((acc, name) => ({
		...acc,
		[name]: {
			...fieldsDefinition?.[name],
			...overrideFields?.[name],

			// manual override for `config` as we need the upsert'd one to take precedence.
			config: overrideFields?.[name]?.config ?? fieldsDefinition?.[name]?.config ?? {},
		},
	}), {} as Record<SupportedField, Field>);

	return fieldsWithConfig;
};
