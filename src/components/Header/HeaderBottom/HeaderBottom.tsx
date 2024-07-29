import Button from '../../UI/button/Button';
import styles from './HeaderBottom.module.scss';

export default function HeaderBottom() {
	return (
		<div className={styles.bottom}>
			<h1 className={styles.title}>Own Your Crypto Adventure</h1>
			<p className={styles.description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				<br />
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				<br />
				veniam, quis nostrud exercitation ullamco laboris nisi
			</p>
			<Button text="Get Started" className={styles.button} />
		</div>
	);
}
