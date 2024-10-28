import { FC, ReactNode } from 'react';
import { Link as RLink } from 'react-router-dom';
import './Link.scss';

interface PropsType {
	to: string;
	className?: string;
	children: ReactNode;
}

const Link: FC<PropsType> = ({ to, className = '', children }) => {
	return (
		<RLink to={to} className={`link ${className}`}>
			{children}
		</RLink>
	);
};

export default Link;
