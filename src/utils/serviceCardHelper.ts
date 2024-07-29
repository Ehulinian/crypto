import styles from '../components/OurServices/OurServices.module.scss';
import { ServiceCardType } from '../types/ourServicesCardType';

export const services: ServiceCardType[] = [
	{
		id: 1,
		iconClass: `${styles.arrowsIcon}`,
		title: 'Bitcoin Escrow Service',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
	},
	{
		id: 2,
		iconClass: `${styles.cashIcon}`,
		title: 'Safe And Secure',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
	},
	{
		id: 3,
		iconClass: `${styles.walletIcon}`,
		title: 'Integrated App',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
	},
	{
		id: 4,
		iconClass: `${styles.cashIcon}`,
		title: 'Safe And Secure',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
	},
	{
		id: 5,
		iconClass: `${styles.walletIcon}`,
		title: 'Safe And Secure',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
	},
];
