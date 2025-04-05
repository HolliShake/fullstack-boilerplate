import * as React from 'react';
import { Checkbox } from '@/components/ui/checkbox'; // Adjust the import path as necessary

export const CheckboxStory = () => {
	const [checked, setChecked] = React.useState(false);

	return (
		<div className='flex items-center gap-2'>
			<Checkbox checked={checked} onCheckedChange={checked => setChecked(checked === 'indeterminate' ? false : checked)} className='h-6 w-6' />
			<label className='ml-2'>Checkbox Label</label>
		</div>
	);
};

export default {
	title: 'Checkbox',
	component: CheckboxStory,
};
