import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
	text: string;
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
	icon?: string;
}

const Button: React.FC<ButtonProps> = ({
	text,
	onClick,
	disabled = false,
	className,
	icon,
}) => {
	const buttonClassName = `${styles['custom-button']} ${
		className ? className : ''
	}`;

	return (
		<button className={buttonClassName} onClick={onClick} disabled={disabled}>
			{icon && <img src={icon} alt="icon" className={styles['button-icon']} />}
			{text}
		</button>
	);
};

export default Button;
