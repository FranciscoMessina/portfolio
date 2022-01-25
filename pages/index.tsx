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
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useRouter } from 'next/router';

export default function Home() {
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
			{/* <BackgroundAnimation /> */}
		</div>
	);
}
