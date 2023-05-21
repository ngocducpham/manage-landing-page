import Image from 'next/image';

import illustrationIntro from '@/assets/illustration-intro.svg';

import Container from './Container';
import EvenColumns from './EvenColumns';
import styles from './Hero.module.scss';
import Typography from './Typography';

function Hero() {
	return (
		<section>
			<Container>
				<EvenColumns>
					<div>
						<Typography.Title level={1}>
							Bring everyone together to build better products.
						</Typography.Title>
						<Typography.Paragraph>
							Manage makes it simple for software teams to plan day-to-day tasks while keeping the
							larger team goals in view.
						</Typography.Paragraph>
					</div>
					<div>
						<Image
							fill
							className={styles.img}
							src={illustrationIntro}
							alt=''
						/>
					</div>
				</EvenColumns>
			</Container>
		</section>
	);
}

export default Hero;
