import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Form from '../components/Form';

const FormContainer: React.FunctionComponent = ()  => {
	const methods = useForm({ mode: 'onSubmit' });

	return (
		<FormProvider {...methods}>
			<Form />
		</FormProvider>
	);
}

export default FormContainer;
