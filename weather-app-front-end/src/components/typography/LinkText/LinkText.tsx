import { FC, ReactNode } from 'react';
import './LinkText.scss';

interface PropsType {
	children: ReactNode;
	className?: string;
}

const LinkText: FC<PropsType> = ({ children, className = '' }) => {
	return <p className={`link-text ${className}`}>{children}</p>;
};

export default LinkText;
