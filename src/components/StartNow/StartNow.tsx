import Button from '../UI/button/Button';
import styles from './StartNow.module.scss';

export default function AboutUs() {
	return (
		<>
			<section className={styles.startNow}>
				<div className={styles.backgroundImage}></div>
				<div className={styles.startNowContent}>
					<div>
						<div className={styles.startNowWrapper}>
							<div className={styles.startNowTop}>
								<h5 className={styles.startNowMainTitle}>Start Now</h5>
								<h3 className={styles.startNowTitle}>Sign up to learn more</h3>
								<p className={styles.startNowDescription}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
									amet amet integer
								</p>
								<Button className={styles.button} text="Get Started" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
