import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes } from 'react';
import './Input.scss';

interface PropsType extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	className?: string;
	placeholder?: string;
	id: string;
}

const Input: FC<PropsType> = forwardRef(({ className = '', placeholder = '', id = '', ...props }, ref) => {
	return <input ref={ref} type="text" className={`secondary-text inputs input ${className}`} id={id} placeholder={placeholder} {...props} />;
})

export default Input;
