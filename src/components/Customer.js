import Button from './Button';
import styles from './Customer.module.scss';
import Typography from './Typography';

function Customer() {
	return (
		<section className={styles.carousel}>
			<Typography.Title level={2}>What they&#39;ve said</Typography.Title>

			<Button>Get Started</Button>
		</section>
	);
}

export default Customer;
