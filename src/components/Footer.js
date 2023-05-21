import Image from 'next/image';

import facebook from '@/assets/icon-facebook.svg';
import instagram from '@/assets/icon-instagram.svg';
import pinterest from '@/assets/icon-pinterest.svg';
import twitter from '@/assets/icon-twitter.svg';
import youtube from '@/assets/icon-youtube.svg';
import logo from '@/assets/logo.svg';

import Button from './Button';
import Container from './Container';
import EvenColumns from './EvenColumns';
import styles from './Footer.module.scss';
import Typography from './Typography';

function Footer() {
	return (
		<>
			<section className={styles.secondFooter}>
				<Container>
					<EvenColumns>
						<div>
							<Typography.Title level={2}>Simplify how your team works today.</Typography.Title>
						</div>
						<div>
							<Button inverted>Get Started</Button>
						</div>
					</EvenColumns>
				</Container>
			</section>
			<footer className={styles.footer}>
				<Container>
					<EvenColumns>
						<div>
							<a href='#'>
								<Image src={logo} alt='logo' />
							</a>
							<ul aria-label='social links' role='list'>
								<li>
									<a href='#' aria-label='facebook'>
										<Image src={facebook} alt='facebook icon' />
									</a>
								</li>
								<li>
									<a href='#' aria-label='youtube'>
										<Image src={youtube} alt='youtube icon' />
									</a>
								</li>
								<li>
									<a href='#' aria-label='twitter'>
										<Image src={twitter} alt='twitter icon' />
									</a>
								</li>
								<li>
									<a href='#' aria-label='pinterest'>
										<Image src={pinterest} alt='pinterest icon' />
									</a>
								</li>
								<li>
									<a href='#' aria-label='instagram'>
										<Image src={instagram} alt='instagram icon' />
									</a>
								</li>
							</ul>
						</div>
						<div>
							<nav>
								<ul aria-label='Footer' role='list'>
									<li>
										<a href='#'>Home</a>
									</li>
									<li>
										<a href='#'>Pricing</a>
									</li>
									<li>
										<a href='#'>Products</a>
									</li>
									<li>
										<a href='#'>About Us</a>
									</li>
									<li>
										<a href='#'>Careers</a>
									</li>
									<li>
										<a href='#'>Community</a>
									</li>
									<li>
										<a href='#'>Privacy Policy</a>
									</li>
								</ul>
							</nav>
						</div>
						<div>
							<form action='#'>
								<input name='email' type='email' />
								<Button>Go</Button>
							</form>
							<Typography.Text>Copyright 2020. All Rights Reserved</Typography.Text>
						</div>
					</EvenColumns>
				</Container>
			</footer>
		</>
	);
}

export default Footer;
