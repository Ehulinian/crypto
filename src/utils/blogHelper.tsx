import icon from '../assets/icons/arrow.svg';
import styles from '../components/Blog/Blog.module.scss';
import Button from '../components/UI/button/Button.tsx';
import { BlogCardType } from '../types/blogCardType';

export const blogCards: BlogCardType[] = [
	{
		id: 1,
		background: `${styles.backgroundImage1}`,
		data: '27 August, 2023',
		blueStroke: `${styles.blueStroke}`,
		cardTitle: 'How to Launch Your Own Cryptocurrency',
		button: (
			<Button className={styles.buttonClass} text="Read More" icon={icon} />
		),
	},
	{
		id: 2,
		background: `${styles.backgroundImage2}`,
		data: '27 August, 2023',
		blueStroke: `${styles.blueStroke}`,
		cardTitle: 'The Rise of Cryptocurrency Mining in Education',
		button: (
			<Button className={styles.buttonClass} text="Read More" icon={icon} />
		),
	},
	{
		id: 3,
		background: `${styles.backgroundImage3}`,
		data: '27 August, 2023',
		blueStroke: `${styles.blueStroke}`,
		cardTitle: 'The Rise of Cryptocurrency Mining in Education',
		button: (
			<Button className={styles.buttonClass} text="Read More" icon={icon} />
		),
	},
];
