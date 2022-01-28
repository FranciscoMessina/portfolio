import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ProjectCard } from '../../components/ProjectCard';
import { english, spanish } from '../../text';

function Projects() {
	const locale = useSelector((state: RootState) => state.text.locale);

	const text = locale === 'en' ? english : spanish;

	return (
		<div>
			<Header />
			<main className='container flex items-center justify-between w-full px-8 mx-auto mt-32 md:px-14 lg:px-24'>
				<section className='w-full'>
					<h2 id='work' className='secondary-title'>
						{text.lang === 'English' ? 'My Projects' : 'Mis proyectos'}
					</h2>
					<p className='section-paragraph'>{text.projects_desc}</p>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 '>
						<ProjectCard
							id={1}
							img='https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
							title='Netflix Clone'
						/>
						<ProjectCard
							id={2}
							img='https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
							title='Netflix Clone'
						/>

						<button
							type='button'
							className='w-full col-span-1 py-2 text-center uppercase transition-all duration-300 transform md:col-span-2 lg:col-span-3 left-2 bg-badge hover:bg-theme hover:translate-x-3'
						>
							{text.lang === 'English' ? 'Load More' : 'Ver mas'}
						</button>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default Projects;
