import React, { Children, forwardRef, useState } from 'react';
import { nanoid } from 'nanoid';

import Typography from '../Typography';
import Label from './atoms/label';

export interface InputDecoratorProps extends React.HTMLAttributes<HTMLLabelElement> {
	label: string;
	error?: string;
	help?: string;
}

const InputDecorator = forwardRef<HTMLLabelElement, InputDecoratorProps>((props, ref) => {
	const { label, error, help, children, ...otherProps } = props;
	const hasError = typeof error === 'string' && Boolean(error.length);
	const [id] = useState(nanoid);

	const child = Children.only(children);

	const accessibleChild = React.Children.map(child, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {
				'aria-describedby': [`${id}-help`, `${id}-error`].join(' '),
				'data-testid': 'input',
			});
		}

		return child;
	});

	return (
		<Label {...otherProps} ref={ref} data-testid={'label'}>
			<Typography
				$type={'label'}
				$color={'textMinor'}
			>
				{label}
			</Typography>

			{accessibleChild}

			{hasError && (
				<Typography
					id={`${id}-error`}
					$type={'bodySmall'}
					$color={'textDanger'}
					data-testid={'error'}
				>
					{error}
				</Typography>
			)}

			{help && !error && (
				<Typography
					id={`${id}-help`}
					$type={'bodySmall'}
					$color={'textMinor'}
					data-testid={'help'}
				>
					{help}
				</Typography>
			)}
		</Label>
	);
});

InputDecorator.displayName = 'InputDecorator';

export default InputDecorator;
