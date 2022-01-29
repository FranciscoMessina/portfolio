import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { CardLoader } from '../../components/CardLoader';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ProjectCard } from '../../components/ProjectCard';
import { colRef } from '../../firebase/firebase';
import { english, spanish } from '../../text';
import { ProjectData } from '../../utils/types';

function Projects() {
	const [value, loading, error] = useCollection<ProjectData>(colRef);

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
						{loading && (
							<>
								{/* <motion.div variants={variantChild}> */}
								<CardLoader />
								{/* </motion.div> */}
								{/* <motion.div variants={variantChild}> */}
								<CardLoader />
								{/* </motion.div> */}
								{/* <motion.div variants={variantChild}> */}
								<CardLoader />
								{/* </motion.div> */}
							</>
						)}

						{value?.docs.map((project, index) => (
							<ProjectCard
								index={index}
								key={project.id}
								id={project.id}
								project={project.data() as ProjectData}
							/>
						))}

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
