import logo from '../../assets/images/Logo.svg';
import styles from './Footer.module.scss';

export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.container}>
					<div className={styles.footerContent}>
						<div className={styles.wrapper}>
							<a href="#" className={styles.logoLink}>
								<img className={styles.logo} src={logo} alt="LOGO" />
							</a>
							<p className={styles.description}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud.
							</p>
							<input
								className={styles.input}
								placeholder="Email Address"
								type="email"
							></input>
						</div>
						<nav className={`${styles.nav} ${styles.menuNav}`}>
							<ul className={styles.navList}>
								<li className={styles.navItem}>
									<a className={styles.navLink} href="#">
										About
									</a>
								</li>
								<li className={styles.navItem}>
									<a className={styles.navLink} href="#about us">
										Service
									</a>
								</li>
								<li className={styles.navItem}>
									<a className={styles.navLink} href="#blog">
										Token Sale
									</a>
								</li>
								<li className={styles.navItem}>
									<a className={styles.navLink} href="#">
										FAQ's
									</a>
								</li>
								<li className={styles.navItem}>
									<a className={styles.navLink} href="#">
										Team
									</a>
								</li>
								<li className={styles.navItem}>
									<a className={styles.navLink} href="#">
										Blog
									</a>
								</li>
							</ul>
						</nav>
						{/* <p className={styles.private}>
							Privacy Policy and Terms of Service
						</p> */}
					</div>
				</div>
			</footer>
			<div className={styles.bgFooter}></div>
		</>
	);
}
