import { useState } from 'react';
import { faqsArr1, faqsArr2 } from '../../utils/faqsHelper';
import styles from './FaqS.module.scss';

export default function FaqS() {
	const [openId, setOpenId] = useState<number | null>(null);

	const handleToggle = (id: number) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<section className={styles.Faqs} id="our-faqs">
			<div className={styles.FaqsContent}>
				<div className={styles.FaqsTop}>
					<h5 className={styles.FaqsTopTitle}>FAQ's</h5>
					<h2 className={styles.FaqsTitle}>Frequently Asked Questions</h2>
					<div className={styles.FaqsDescription}>
						When an unknown printer took a galley of type and scrambled it to
						make a type specimen book.
					</div>
				</div>
				<div className={styles.FaqsBottomAccordeon}>
					<div className={styles.FaqsColumnFirst}>
						{faqsArr1.map(item => (
							<div key={item.id} className={styles.accordeonItem}>
								<div className={styles.accordeonWrapper}>
									<h5 className={styles.accordeonTitle}>{item.title}</h5>
									<div className={styles.icon}>
										<a
											onClick={() => handleToggle(item.id)}
											className={`${styles.icon} ${styles.plusIcon} ${
												openId === item.id ? styles.open : ''
											}`}
										></a>
									</div>
								</div>
								<div
									className={`${styles.accordeonCollapse} ${
										openId === item.id ? styles.open : ''
									}`}
								>
									<p className={styles.accordeonDescription}>
										{openId === item.id && item.description}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className={styles.FaqsColumnSecond}>
						{faqsArr2.map(item => (
							<div key={item.id} className={styles.accordeonItem}>
								<div className={styles.accordeonWrapper}>
									<h5 className={styles.accordeonTitle}>{item.title}</h5>
									<div className={styles.icon}>
										<a
											onClick={() => handleToggle(item.id)}
											className={`${styles.icon} ${styles.plusIcon} ${
												openId === item.id ? styles.open : ''
											}`}
										></a>
									</div>
								</div>
								<div
									className={`${styles.accordeonCollapse} ${
										openId === item.id ? styles.open : ''
									}`}
								>
									<p className={styles.accordeonDescription}>
										{openId === item.id && item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
