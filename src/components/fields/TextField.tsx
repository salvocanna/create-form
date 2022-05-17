import React, { forwardRef } from 'react';

import { Field } from '../../config';
import Text from '../input/Text';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	field: Field;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => (
	<Text
		{...props}
		type={'text'}
		ref={ref}
	/>
));

TextField.displayName = 'TextField';

export default TextField;
