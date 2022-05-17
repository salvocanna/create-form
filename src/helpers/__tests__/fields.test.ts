import { Config } from '../../config';
import { getFormFields } from '../fields';

const baseConfigNoExceptions: Config = {
	commonFields: ['firstName', 'lastName'],
	countries: {},
};

const baseConfigExceptionForIT: Config = {
	commonFields: ['firstName', 'lastName'],
	countries: {
		IT: {
			fields: ['childrenCount'],
			overrides: {
				yearlyHolidayAllowance: {
					config: { min: 30, max: void 0 },
				},
			},
		},
	},
};

const baseConfigAllCustom: Config = {
	commonFields: [],
	countries: {
		IT: {
			fields: ['childrenCount'],
			overrides: {
				childrenCount: {
					config: { min: 50 },
				},
			},
		},
	},
};

describe('fields helper', () => {
	it('returns a base config', () => {
		const form = getFormFields(baseConfigNoExceptions, '');

		expect(form).toHaveProperty('firstName');
		expect(form).toHaveProperty('lastName');
		expect(form).not.toHaveProperty('birthDate');

	});

	it('adds countries exceptions', () => {
		const form = getFormFields(baseConfigExceptionForIT, 'IT');

		expect(form).toHaveProperty('firstName');
		expect(form).toHaveProperty('lastName');
		expect(form).toHaveProperty('childrenCount');
		expect(form).toHaveProperty('yearlyHolidayAllowance');
	});

	it('respects overrides', () => {
		const form = getFormFields(baseConfigExceptionForIT, 'IT');

		expect(form.yearlyHolidayAllowance.config?.max).toBe(void 0);
		expect(form.yearlyHolidayAllowance.config?.min).toBe(30);
	});

	it('respects overrides even if defined in standard fields', () => {
		const form = getFormFields(baseConfigAllCustom, 'IT');

		expect(Object.keys(form).length).toBe(1);
		expect(form).toHaveProperty('childrenCount');
		expect(form.childrenCount.config?.min).toBe(50);
		expect(form.childrenCount.config).not.toHaveProperty('pattern');
	});
});
