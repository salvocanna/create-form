import React, { forwardRef } from 'react';

import { Option } from '../../config';
import Input from '../input/atoms/input';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	options: Option[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ options, ...props }, ref) => (
	<Input
		{...props}
		as={'select'}
		ref={ref}
	>
		{props.placeholder && (
			<option value={''} disabled>{props.placeholder}</option>
		)}
		{options.map(([value, label]) => (
			<option key={value} value={value}>{label}</option>
		))}
	</Input>
));

Select.displayName = 'Select';

export default Select;
