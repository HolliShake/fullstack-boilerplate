import { Button as ShadcnButton, buttonVariants } from '@/components/ui/button';
import { ButtonHTMLAttributes } from 'react';

type ButtonVariantsProps = Parameters<typeof buttonVariants>[0];

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	ButtonVariantsProps & {
		// Add any additional props here
		isLoading?: boolean;
		loadingText?: string;
	};

const Button = ({ children, isLoading, loadingText = 'Loading...', disabled, ...props }: CustomButtonProps) => {
	return (
		<ShadcnButton disabled={isLoading || disabled} {...props}>
			{isLoading ? loadingText : children}
		</ShadcnButton>
	);
};

Button.displayName = 'Button';

export default Button;
