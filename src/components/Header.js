import Image from 'next/image';

import logo from '@/assets/logo.svg';

import Button from './Button';
import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<a href='#'>
					<Image src={logo} alt='Manage' />
				</a>
				<nav className={styles.navigation}>
					<ul role='list' className={styles.nav}>
						<li>
							<a href='#'>Pricing</a>
						</li>
						<li>
							<a href='#'>Product</a>
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
					</ul>
				</nav>
				<Button>Get Started</Button>
			</div>
		</header>
	);
}

export default Header;
