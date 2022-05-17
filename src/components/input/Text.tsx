import React, { forwardRef } from 'react';

import Input from '../input/atoms/input';

const Text = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
	<Input
		{...props}
		ref={ref}
	/>
));

Text.displayName = 'Text';

export default Text;
