import React from 'react';
import styles from './Team.module.scss';

type Props = {
	icon: string;
};

const Icon: React.FC<Props> = ({ icon }) => {
	return (
		<div className={styles.iconContainer}>
			<a className={`${styles.icon} ${icon}`}></a>
		</div>
	);
};

export default Icon;
