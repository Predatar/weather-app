import { FC, ReactNode } from 'react';
import './Heading2.scss';

interface PropsType {
	children: ReactNode;
	className?: string;
}

const Heading2: FC<PropsType> = ({ children, className = '' }) => {
	return <h2 className={`heading2 ${className}`}>{children}</h2>;
};

export default Heading2;
