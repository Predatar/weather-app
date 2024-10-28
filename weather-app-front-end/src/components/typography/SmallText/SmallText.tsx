import { FC, ReactNode } from 'react';
import './SmallText.scss';

interface PropsType {
	children: ReactNode;
	className?: string;
}

const SmallText: FC<PropsType> = ({ children, className = '' }) => {
	return <p className={`small-text ${className}`}>{children}</p>;
};

export default SmallText;
