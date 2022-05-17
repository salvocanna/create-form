import React, { forwardRef } from 'react';

import { Field, Option } from '../../config';
import Select from '../input/Select';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	field: Field;
}

const SelectField = forwardRef<HTMLSelectElement, SelectProps>(({ field, ...props}, ref) => (
	<Select
		{...props}
		ref={ref}
		options={field.options as Option[]}
	/>
));

SelectField.displayName = 'SelectField';

export default SelectField;
