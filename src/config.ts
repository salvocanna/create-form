import { RegisterOptions } from 'react-hook-form';

// Ideally this whole config file would come from some API call in JSON
export const countries = [{
	code: 'ES',
	name: 'Spain',
}, {
	code: 'GH',
	name: 'Ghana',
}, {
	code: 'BR',
	name: 'Brazil',
}, {
	code: 'GB',
	name: 'United Kingdom',
}];

export type FieldType = 'text' | 'number' | 'select';
type ImportedProps = 'min' | 'max' | 'pattern' | 'required' | 'validate' | 'value' | 'setValueAs';

export type FieldConfig = Pick<RegisterOptions, ImportedProps>;

export type Option = [string, string];

export interface Field {
	type: FieldType;
	displayName: string;
	help?: string;
	defaultValue?: string | number;
	config?: FieldConfig;
	options?: unknown;
}

export const typesValidation: Partial<Record<FieldType, Partial<Pick<RegisterOptions, 'validate' | 'setValueAs'>>>> = {
	number: {
		validate: (v: string) => !Number.isNaN(Number(v)),
		setValueAs: (v: string) => v.length > 0 ? Number(v) : '',
	},
};

const fieldDefs = {
	firstName: {
		type: 'text',
		displayName: 'First name',
	},
	lastName: {
		type: 'text',
		displayName: 'Last name',
	},
	birthDate: {
		type: 'text',
		displayName: 'Birth date',
		help: 'Use the DD/MM/YYYY format',
		config: { pattern: /^\d{2}\/\d{2}\/\d{4}$/ },
	},
	// is this yearly or monthly? different countries count them differently e.g. UK vs Italy.
	// weighting in to be a bit more specific for future readers.
	yearlyHolidayAllowance: {
		type: 'number',
		displayName: 'Holiday allowance (yearly)',
	},
	// same as above, weekly or monthly in this case?
	weeklyWorkingHours: {
		type: 'number',
		displayName: 'Working hours (weekly)',
		config: { defaultValue: 40, min: 0 },
	},
	maritalStatus: {
		type: 'select',
		displayName: 'Marital status',
		defaultValue: 'S',
		options: [['S', 'Single'], ['M', 'Married'], ['E', 'Something else..']],
	},
	socialInsuranceNumber: {
		type: 'text',
		displayName: 'Social insurance number',
		config: { pattern: /^\d{2}[/\s]?\d{8}[/\s]?\d{2}$/ },
	},
	childrenCount: {
		type: 'number',
		displayName: 'Number of children',
		config: { pattern: /^\d*$/ },
	},
};

export type SupportedField = keyof typeof fieldDefs;

export const fieldsDefinition = fieldDefs as Record<SupportedField, Field>;

type Country = string;

interface CountryRuleSet {
	fields: SupportedField[];
	overrides: Record<string, Partial<Field>>;
}

export interface Config {
	commonFields: SupportedField[];
	countries: Record<Country, CountryRuleSet>;
}

export const config: Config = {
	commonFields: ['firstName', 'lastName', 'birthDate', 'yearlyHolidayAllowance'],
	countries: {
		ES: {
			fields: ['maritalStatus', 'socialInsuranceNumber'],
			overrides: {
				yearlyHolidayAllowance: {
					config: { min: 30, max: void 0 },
				},
			},
		},
		GH: {
			fields: ['maritalStatus', 'childrenCount'],
			overrides: {
				yearlyHolidayAllowance: {
					config: { min: 0, max: void 0 },
				},
			},
		},
		BR: {
			fields: ['weeklyWorkingHours'],
			overrides: {
				yearlyHolidayAllowance: {
					config: { min: 0, max: 40 },
				},
			},
		},
	},
};
