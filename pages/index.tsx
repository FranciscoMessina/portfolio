import Head from 'next/head';
import { useEffect, useState } from 'react';
import BackgroundAnimation from '../components/BackgroundAnimation';
import { ContactMe } from '../components/ContactMe';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { AboutMe } from '../components/AboutMe';
import { Footer } from '../components/Footer';
import { english, spanish } from '../text';

export default function Home() {
	const [language, setLanguage] = useState(true);

	let text = language ? english : spanish;

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

		const test = () => {
			updateList();
		};

		updateList();
		window.addEventListener('scroll', test);

		return () => {
			window.removeEventListener('scroll', test);
		};
	}, []);

	return (
		<div>
			<Head>
				<title>Francisco Messina | Fullstack Developer</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header text={text} />
			<HeroSection text={text} />
			<ProjectsSection text={text} />
			<AboutMe text={text} />
			<ContactMe text={text} />
			<Footer changeLang={() => setLanguage(curr => !curr)} text={text} />
			{/* <BackgroundAnimation /> */}
		</div>
	);
}
