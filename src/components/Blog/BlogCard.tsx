import React from 'react';
import { BlogCardType } from '../../types/blogCardType';
import styles from './Blog.module.scss';

type Props = {
	card: BlogCardType;
};

const BlogCard: React.FC<Props> = ({ card }) => {
	return (
		<div className={styles.blogCard}>
			<div className={card.background}></div>
			<div className={styles.wrapperContent}>
				<div className={styles.cardData}>{card.data}</div>
				<div className={card.blueStroke}></div>
				<h5 className={styles.cardTitle}>{card.cardTitle}</h5>
			</div>
			{card.button}
		</div>
	);
};

export default BlogCard;
