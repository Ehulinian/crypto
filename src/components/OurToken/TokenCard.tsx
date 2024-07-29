import React from 'react';
import { TokenCardType } from '../../types/ourTokenCardType';
import styles from './OurToken.module.scss';

type TokenCardProps = {
	card: TokenCardType;
};

const TokenCard: React.FC<TokenCardProps> = ({ card }) => {
	return (
		<div className={styles.tokenSealCard}>
			<div className={styles.contentCard}>
				<div className={styles.wrapper}>
					<div className={styles.icon}>
						<a className={`${styles.icon} ${card.iconClass}`}></a>
					</div>
					<h3 className={styles.itemTitle}>{card.title}</h3>
					<div className={styles.itemDescription}>{card.description}</div>
				</div>
			</div>
		</div>
	);
};

export default TokenCard;
