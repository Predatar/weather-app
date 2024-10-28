import { FC, ReactNode } from 'react';
import './MainText.scss';

interface PropsType {
	children: ReactNode;
	isBold?: boolean;
	className?: string;
}

const MainText: FC<PropsType> = ({ children, className = '', isBold = false }) => {
	return <p className={`main-text ${isBold ? 'bold' : ''} ${className}`}>{children}</p>;
};

export default MainText;
