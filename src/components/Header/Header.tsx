import React from 'react';
import AsideMenu from './AsideMenu/AsideMenu';
import styles from './Header.module.scss';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import TopBar from './TopBar/TopBar';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.headerContent}>
					<TopBar />
					<div className={styles.intro}>
						<HeaderBottom />
					</div>
					<AsideMenu />
				</div>
			</div>
		</header>
	);
};

export default Header;
