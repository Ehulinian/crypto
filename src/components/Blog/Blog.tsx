import React, { useState } from 'react';
import { blogCards } from '../../utils/blogHelper';
import styles from './Blog.module.scss';
import BlogCard from './BlogCard';

const Blog: React.FC = () => {
	const [cards] = useState(blogCards);
	return (
		<section className={styles.blog} id='our-blog'>
			<div className={styles.blogContent}>
				<div className={styles.topContent}>
					<h5 className={styles.mainTitle}>Blog</h5>
					<h2 className={styles.secondTitle}>Latest News & Blog</h2>
					<p className={styles.topDescription}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
						aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
					</p>
				</div>
				<div className={styles.bottomContent}>
					{cards.map(card => (
						<BlogCard key={card.id} card={card} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
