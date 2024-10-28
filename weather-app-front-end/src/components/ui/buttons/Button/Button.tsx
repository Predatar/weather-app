import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import './Button.scss';
import { ButtonText } from '@/components/typography';

interface ProsType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	className?: string;
}

const Button: FC<ProsType> = ({ className = '', children, ...props }) => {
	return (
		<button className={`button ${className}`} {...props}>
			<ButtonText>{children}</ButtonText>
		</button>
	);
};

export default Button;
