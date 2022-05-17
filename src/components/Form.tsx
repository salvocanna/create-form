import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { config, countries, SupportedField } from '../config';
import { getFlagEmoji } from '../helpers/emoji';
import { getFormFields } from '../helpers/fields';
import FormField from './FormField';
import Select from './input/Select';
import Submit from './input/Submit';
import Typography from './Typography';

const Form: React.FunctionComponent = () => {
	const {
		register,
		handleSubmit,
		watch,
		clearErrors,
		formState: { errors },
	} = useFormContext();

	const countryCode = watch('countryCode') as string;

	useEffect(() => {
		if (!countryCode)
			return;

		clearErrors();
	}, [countryCode, clearErrors]);

	const formFields = getFormFields(config, countryCode);

	return (
		<FormStyled onSubmit={handleSubmit(data => console.log(data))}>
			<Typography $type={'heading'} $color={'text'} $textAlign={'center'}>
				{'Create new employee'}
			</Typography>

			<Select
				{...register('countryCode', { required: true, validate: Boolean })}
				placeholder={'Please select a country'}
				defaultValue={''}
				options={countries.map(({ code, name }) => ([code, `${getFlagEmoji(code)} ${name}`]))}
			/>

			{countryCode && (Object.keys(formFields) as SupportedField[]).map(name => (
				<FormField
					key={name}
					name={name}
					field={formFields[name]}
				/>
			))}

			{errors.countryCode && (
				<Typography $type={'bodySmall'} $color={'textDanger'}>
					{'Please select a country'}
				</Typography>
			)}

			<Submit value={'Submit form'} disabled={Boolean(Object.keys(errors).length)} />
		</FormStyled>
	);
};

const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export default Form;
