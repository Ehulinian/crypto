import { icons, teamCardsData } from '../../utils/teamHelper';
import styles from './Team.module.scss';
import TeamCard from './TeamCard';

export default function Team() {
	return (
		<section className={styles.team} id="our-team">
			<div className={styles.teamContent}>
				<div className={styles.teamContentIntro}>
					<h5 className={styles.teamContentMainTitle}>Team</h5>
					<h2 className={styles.teamContentTitle}>Member of our expert team</h2>
					<p className={styles.teamContentDescription}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
						aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
					</p>
				</div>
				<div className={styles.teamContentBottom}>
					{teamCardsData.map((card, id) => (
						<TeamCard key={id} card={card} icons={icons} />
					))}
				</div>
			</div>
		</section>
	);
}
