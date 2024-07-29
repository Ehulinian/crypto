import logo from '../../../assets/images/Logo.svg';
import Button from '../../UI/button/Button';
import styles from './TopBar.module.scss';

export default function TopBar() {
	return (
		<div className={styles.topBar}>
			<a href="#" className={styles.logoLink}>
				<img className={styles.logo} src={logo} alt="LOGO" />
			</a>

			<div className={styles.topBarNav}>
				<ul className={styles.topBarList}>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="#our-blog">
							Blog
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="#our-team">
							Team
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="#our-faqs">
							FAQ's
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="#our-token">
							Token Sale
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="#our-services">
							Service
						</a>
					</li>
					<li className={styles.navItem}>
						<a className={styles.navLink} href="#about-us">
							About
						</a>
					</li>
				</ul>
				<Button text="Get in touch" className={styles.button} />
				<div className={styles.icon}>
					<a href="#menu" className={`${styles.icon} ${styles.menuIcon}`}></a>
				</div>
			</div>
		</div>
	);
}
