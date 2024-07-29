// OurToken.tsx
import { tokenCards } from '../../utils/ourTokenHelper';
import styles from './OurToken.module.scss';
import TokenCard from './TokenCard';

export default function OurToken() {
	return (
		<section className={styles.ourToken} id='our-token'>
			<div className={styles.ourTokenContainer}>
				<div className={styles.ourTokenTop}>
					<h5 className={styles.ourTokenTopTitle}>Our Token</h5>
					<h2 className={styles.ourTokenTitle}>Token seal</h2>
					<div className={styles.ourTokenDescription}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
						aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
					</div>
				</div>
				<div className={styles.ourTokenBottom}>
					{tokenCards.map(card => (
						<TokenCard key={card.id} card={card} />
					))}
				</div>
			</div>
		</section>
	);
}
