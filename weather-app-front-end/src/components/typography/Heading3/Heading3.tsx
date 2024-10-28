import { FC, ReactNode } from 'react';
import './Heading3.scss';

interface PropsType {
	children: ReactNode;
	className?: string;
}

const Heading3: FC<PropsType> = ({ children, className = '' }) => {
	return <h3 className={`heading3 ${className}`}>{children}</h3>;
};

export default Heading3;
