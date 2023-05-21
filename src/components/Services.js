import Container from './Container';
import EvenColumns from './EvenColumns';
import styles from './Services.module.scss';
import Typography from './Typography';

function Services() {
	return (
		<section className={styles.section}>
			<Container>
				<EvenColumns>
					<div>
						<Typography.Title level={2}>What&#39;s different about Manage?</Typography.Title>
						<Typography.Paragraph>
							Manage provides all the functionality your team needs, without the complexity. Our
							software is tailor-made for modern digital product teams.
						</Typography.Paragraph>
					</div>
					<div>
						<ul className={styles.services} role='list'>
							<li>
								<Typography.Title level={3}>Track company-wide progress</Typography.Title>
								<Typography.Paragraph>
									See how your day-to-day tasks fit into the wider vision. Go from tracking progress
									at the milestone level all the way done to the smallest of details. Never lose
									sight of the bigger picture again.
								</Typography.Paragraph>
							</li>
							<li>
								<Typography.Title level={3}>Advanced built-in reports</Typography.Title>
								<Typography.Paragraph>
									Set internal delivery estimates and track progress toward company goals. Our
									customizable dashboard helps you build out the reports you need to keep key
									stakeholders informed.
								</Typography.Paragraph>
							</li>
							<li>
								<Typography.Title level={3}>Everything you need in one place</Typography.Title>
								<Typography.Paragraph>
									Stop jumping from one service to another to communicate, store files, track tasks
									and share documents. Manage offers an all-in-one team productivity solution.
								</Typography.Paragraph>
							</li>
						</ul>
					</div>
				</EvenColumns>
			</Container>
		</section>
	);
}

export default Services;
