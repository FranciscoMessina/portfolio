/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { AboutMe } from '../components/AboutMe';
import { ContactMe } from '../components/ContactMe';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { swap } from '../features/text/textSlice';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Home() {
	const [lang, setLang] = useLocalStorage('lang', 'en');
	const locale = useSelector((state: RootState) => state.text.locale);

	const dispatch = useDispatch();

	useEffect(() => {
		if (locale === lang) return;

		dispatch(swap());

		return () => {};
	}, [dispatch]);

	useEffect(() => {
		function updateList() {
			const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
				return (
					Math.abs(a.getBoundingClientRect().top) -
					Math.abs(b.getBoundingClientRect().top)
				);
			});

			document
				.querySelectorAll('.selected-circle')
				.forEach(c => c.classList.remove('selected-circle'));

			document
				.querySelectorAll('.nav-item')
				.forEach(c => c.classList.remove('text-selected-text'));

			document
				.querySelectorAll('.nav-dot')
				[
					[...document.querySelectorAll('h1, h2')].indexOf(titles[0])
				].classList.add('selected-circle');

			document
				.querySelectorAll('.nav-item')
				[
					[...document.querySelectorAll('h1, h2')].indexOf(titles[0])
				].classList.add('text-selected-text');
		}

		const handleScroll = () => {
			updateList();
		};

		updateList();
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			<Header />
			<HeroSection />
			<ProjectsSection />
			<AboutMe />
			<ContactMe />
			<Footer />
		</div>
	);
}
