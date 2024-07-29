import styles from './AsideMenu.module.scss';

export default function AsideMenu() {
	return (
		<aside className={`${styles.pageMenu} ${styles.menu}`} id="menu">
			<div className={styles.container}>
				<div className={`${styles.topBar} ${styles.menuTop}`}>
					<a href="#" className={`${styles.icon} ${styles.closeIcon}`}></a>
				</div>
				<div className={styles.menuBottom}>
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
				</div>
			</div>
		</aside>
	);
}
