import { FC, ReactNode } from 'react';
import './ButtonText.scss';

interface PropsType {
	children: ReactNode;
	className?: string;
}

const ButtonText: FC<PropsType> = ({ children, className = '' }) => {
	return <span className={`button-text ${className}`}>{children}</span>;
};

export default ButtonText;
