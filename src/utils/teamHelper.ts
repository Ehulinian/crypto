import styles from '../components/Team/Team.module.scss';
import { IconType, TeamCardType } from '../types/teamCardType';

export const teamCardsData: TeamCardType[] = [
	{
		id: 1,
		title1: 'Hulon Anish',
		title: 'Hulon Anish',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
		backgroundClass: `${styles.background} ${styles.background1}`,
	},
	{
		id: 2,
		title1: 'Crystal Ealy',
		title: 'Crystal Ealy',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
		backgroundClass: `${styles.background} ${styles.background2}`,
	},
	{
		id: 3,
		title1: 'Zachary Cadiente',

		title: 'Zachary Cadiente',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
		backgroundClass: `${styles.background} ${styles.background3}`,
	},
	{
		id: 4,
		title1: 'Kelvin Powell',

		title: 'Kelvin Powell',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
		backgroundClass: `${styles.background} ${styles.background4}`,
	},
];

export const icons: IconType[] = [
	{ icon: `${styles.icon1}` },
	{ icon: `${styles.icon2}` },
	{ icon: `${styles.icon3}` },
	{ icon: `${styles.icon4}` },
];
