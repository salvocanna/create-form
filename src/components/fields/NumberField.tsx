import React, { forwardRef } from 'react';

import { Field } from '../../config';
import Text from '../input/Text';

export interface NumberFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	field: Field;
}

const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(({ field, ...props}, ref) => (
	<Text
		{...props}
		type={'number'}
		ref={ref}
	/>
));

NumberField.displayName = 'NumberField';

export default NumberField;
