import React from 'react';
import { IconType, TeamCardType } from '../../types/teamCardType';
import styles from './Team.module.scss';
import Icon from './TeamCardIcon';

type TeamCardProps = {
	card: TeamCardType;
	icons: IconType[];
};

const TeamCard: React.FC<TeamCardProps> = ({ card, icons }) => {
	return (
		<div className={`${styles.teamCard} ${card.backgroundClass}`}>
			<h3 className={styles.itemTitle1}>{card.title1}</h3>
			<div className={styles.icons}>
				{icons.map((icon, id) => (
					<Icon key={id} icon={icon.icon} />
				))}
			</div>
			<div className={styles.cardTextWrapper}>
				<h3 className={styles.itemTitle}>{card.title}</h3>
				<div className={styles.itemDescription}>{card.description}</div>
			</div>
		</div>
	);
};

export default TeamCard;
