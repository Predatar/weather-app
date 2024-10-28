import { FC, ReactNode } from 'react';
import './Container.scss';

interface ProsType {
	children: ReactNode;
}

const Container: FC<ProsType> = ({ children }) => {
	return <div className="container">{children}</div>;
};

export default Container;
