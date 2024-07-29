import React from 'react';
import { ServiceCardType } from '../../types/ourServicesCardType';
import styles from './OurServices.module.scss';

type ServiceCardProps = {
	service: ServiceCardType;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
	return (
		<div className={styles.ourServiceItem}>
			<div className={styles.wrapper}>
				<div className={styles.icon}>
					<a className={`${styles.icon} ${service.iconClass}`}></a>
				</div>
				<h3 className={styles.itemTitle}>{service.title}</h3>
				<div className={styles.itemDescription}>{service.description}</div>
			</div>
		</div>
	);
};

export default ServiceCard;
