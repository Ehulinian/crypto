import styles from '../components/OurToken/OurToken.module.scss';
import { TokenCardType } from '../types/ourTokenCardType.ts';

export const tokenCards: TokenCardType[] = [
	{
		id: 1,
		iconClass: `${styles.segmentIcon}`,
		title: 'Enjoy The Profit',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl praesent massa ullamcorper ultrices eu tortor...',
	},
	{
		id: 2,
		iconClass: `${styles.supportHandMoneyIcon}`,
		title: 'Customer Support',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl praesent massa ullamcorper ultrices eu tortor...',
	},
	{
		id: 3,
		iconClass: `${styles.unionIcon}`,
		title: 'Confirmation',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl praesent massa ullamcorper ultrices eu tortor...',
	},
];
