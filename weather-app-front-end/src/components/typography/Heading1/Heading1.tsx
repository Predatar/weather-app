import { FC, ReactNode } from 'react';
import './Heading1.scss';

interface PropsType {
	children: ReactNode;
	className?: string;
}

const Heading1: FC<PropsType> = ({ children, className = '' }) => {
	return <h1 className={`heading1 ${className}`}>{children}</h1>;
};

export default Heading1;
