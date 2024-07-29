import { services } from '../../utils/serviceCardHelper';
import styles from './OurServices.module.scss';
import ServiceCard from './ServiceCard';

export default function OurServices() {
	return (
		<section className={styles.ourServices} id='our-services'>
			<div className={styles.ourServicesContent}>
				<div className={styles.ourServiceIntro}>
					<h5 className={styles.ourServiceMainTitle}>Our Services</h5>
					<h2 className={styles.ourServiceTitle}>Our Services for You</h2>
					<div className={styles.ourServiceDescription}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud.
					</div>
				</div>
				{services.map(service => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>
		</section>
	);
}
