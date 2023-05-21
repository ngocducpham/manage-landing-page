import Customer from '@/components/Customer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function Home() {
	return (
		<>
			<main>
				<Header />
				<Hero />
				<Services />
				<Customer />
			</main>
			<Footer />;
		</>
	);
}
