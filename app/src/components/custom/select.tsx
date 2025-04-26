'use client';
import { SelectContent, SelectItem, SelectTrigger, SelectValue, Select as ShadcnSelect } from '@/components/ui/select';
import { SelectProps as ShadcnSelectProps } from '@radix-ui/react-select';
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { InputColor, InputVariant, Radius, Shadow } from '@/lib/type';

export type SelectOption = {
	label: string;
	value: string;
	subtitle?: string;
	disabled?: boolean;
};

const selectVariants = cva('w-full bg-background border-default-300 dark:border-700 px-3 h-9 text-sm transition duration-300', {
	variants: {
		color: {
			default: 'border-default-300 text-default-500 focus:outline-none focus:border-primary disabled:bg-default-200 placeholder:text-accent-foreground/50',
			primary: 'border-primary text-primary focus:outline-none focus:border-primary-700 disabled:bg-primary/30 disabled:placeholder:text-primary placeholder:text-primary/70',
			info: 'border-info/50 text-info focus:outline-none focus:border-info-700 disabled:bg-info/30 disabled:placeholder:text-info placeholder:text-info/70',
			warning: 'border-warning/50 text-warning focus:outline-none focus:border-warning-700 disabled:bg-warning/30 disabled:placeholder:text-info placeholder:text-warning/70',
			success: 'border-success/50 text-success focus:outline-none focus:border-success-700 disabled:bg-success/30 disabled:placeholder:text-info placeholder:text-success/70',
			destructive:
				'border-destructive/50 text-destructive focus:outline-none focus:border-destructive-700 disabled:bg-destructive/30 disabled:placeholder:text-destructive placeholder:text-destructive/70',
		},
		variant: {
			flat: 'bg-default-100',
			underline: 'border-b',
			bordered: 'border',
			faded: 'border border-default-300 bg-default-100',
			ghost: 'border-0 focus:border',
			'flat-underline': 'bg-default-100 border-b',
		},
		shadow: {
			none: '',
			sm: 'shadow-sm',
			md: 'shadow-md',
			lg: 'shadow-lg',
			xl: 'shadow-xl',
			'2xl': 'shadow-2xl',
		},
		radius: {
			none: 'rounded-none',
			sm: 'rounded',
			md: 'rounded-lg',
			lg: 'rounded-xl',
			xl: 'rounded-[20px]',
		},
		size: {
			sm: 'h-8 text-xs',
			md: 'h-9 text-xs',
			lg: 'h-10 text-sm',
			xl: 'h-12 text-base',
		},
	},
	compoundVariants: [
		{
			variant: 'flat',
			color: 'primary',
			className: 'bg-primary/10',
		},
		{
			variant: 'flat',
			color: 'info',
			className: 'bg-info/10',
		},
		{
			variant: 'flat',
			color: 'warning',
			className: 'bg-warning/10',
		},
		{
			variant: 'flat',
			color: 'success',
			className: 'bg-success/10',
		},
		{
			variant: 'flat',
			color: 'destructive',
			className: 'bg-destructive/10',
		},
		{
			variant: 'faded',
			color: 'primary',
			className: 'bg-primary/10 border-primary/30',
		},
		{
			variant: 'faded',
			color: 'info',
			className: 'bg-info/10 border-info/30',
		},
		{
			variant: 'faded',
			color: 'warning',
			className: 'bg-warning/10 border-warning/30',
		},
		{
			variant: 'faded',
			color: 'success',
			className: 'bg-success/10 border-success/30',
		},
		{
			variant: 'faded',
			color: 'destructive',
			className: 'bg-destructive/10 border-destructive/30',
		},
	],
	defaultVariants: {
		color: 'default',
		size: 'md',
		variant: 'bordered',
		radius: 'md',
	},
});

interface CustomSelectProps extends ShadcnSelectProps, VariantProps<typeof selectVariants> {
	className?: string;
	placeholder?: string;
	options: SelectOption[];
	value?: string;
	onValueChange?: (value: string) => void;
	color?: InputColor;
	variant?: InputVariant;
	radius?: Radius;
	shadow?: Shadow;
	size?: 'sm' | 'md' | 'lg' | 'xl' | null | undefined;
}

const Select = ({ options = [], placeholder = 'Select an option', value, onValueChange, color, variant, radius, shadow, size, className, ...props }: CustomSelectProps) => {
	const [internalValue, setInternalValue] = React.useState<string | undefined>(value);

	const handleValueChange = (newValue: string) => {
		setInternalValue(newValue);
		onValueChange?.(newValue);
	};

	// Use controlled value if provided, otherwise use internal state
	const currentValue = value !== undefined ? value : internalValue;

	// Find the selected option to display its label
	const selectedOption = options.find(option => option.value === currentValue);

	return (
		<ShadcnSelect value={currentValue} onValueChange={handleValueChange} {...props}>
			<SelectTrigger className={cn(selectVariants({ color, size, radius, variant, shadow }), className)}>
				<SelectValue placeholder={placeholder}>{selectedOption?.label}</SelectValue>
			</SelectTrigger>
			<SelectContent className='z-[9999999]'>
				{options.map(option => (
					<SelectItem key={`${option.value}-${option.label}`} value={option.value} disabled={option.disabled} className='flex flex-col items-start'>
						<div>{option.label}</div>
						{option.subtitle && <span className='text-xs text-gray-500'>{option.subtitle}</span>}
					</SelectItem>
				))}
			</SelectContent>
		</ShadcnSelect>
	);
};

Select.displayName = 'Select';

export default Select;
