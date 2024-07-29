import styles from './AboutUs.module.scss';

export default function AboutUs() {
	return (
		<>
			<div className={styles.wrapperImage}>
				<div className={styles.backgroundImage}></div>
			</div>
			<div className={styles.container}>
				<section className={styles.aboutUs} id="about-us">
					<div className={styles.aboutUsContent}>
						<div className={styles.aboutUsWrapper}>
							<div className={styles.aboutUsTop}>
								<h5 className={styles.aboutUsMainTitle}>About Us</h5>
								<h2 className={styles.aboutUsTitle}>Company Standards</h2>
								<div className={styles.aboutUsDescription}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud.
								</div>
							</div>
							<div className={styles.aboutUsInform}>
								<div className={styles.aboutUsUsers}>
									<p className={styles.aboutUsCount}>
										10M<span>+</span>
									</p>
									<span className={styles.aboutUsText}>User active</span>
								</div>
								<div className={styles.aboutUsCountries}>
									<p className={styles.aboutUsCount}>
										30<span>+</span>
									</p>
									<span className={styles.aboutUsText}>Country</span>
								</div>
								<div className={styles.aboutUsTransactions}>
									<p className={styles.aboutUsCount}>
										$50M<span>+</span>
									</p>
									<span className={styles.aboutUsText}>Transaction</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
