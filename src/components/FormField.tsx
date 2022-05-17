import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Field, typesValidation } from '../config';
import * as fields from './fields';
import InputDecorator from './input/InputDecorator';

const FormField: React.FunctionComponent<{ name: string; field: Field }> = ({ name, field }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const type = field.type as keyof typeof fields;

	// this wil default to text if we don't know which field it is referring to
	const Component = fields[type] ?? fields['text'];

	return (
		<InputDecorator
			label={field.displayName}
			error={errors[name] && 'Please enter a valid value'}
			help={field.help}
		>
			<Component
				aria-invalid={Boolean(errors[name])}
				{...register(name, {
					required: true,
					...(typesValidation[type] ?? {}),
					...field.config,
				})}
				defaultValue={field.defaultValue}
				field={field}
			/>
		</InputDecorator>
	);
};

export default FormField;
