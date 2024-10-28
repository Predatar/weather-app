import { FC, ReactNode } from 'react';
import './SecondaryText.scss';

interface PropsType {
	children: ReactNode;
	variant?: 'normal' | 'inputs';
	className?: string;
}

const SecondaryText: FC<PropsType> = ({ children, className = '', variant = 'normal' }) => {
	return <p className={`secondary-text ${variant} ${className}`}>{children}</p>;
};

export default SecondaryText;
