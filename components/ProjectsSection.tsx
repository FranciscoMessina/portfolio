import Link from 'next/link';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { colRef } from '../firebase/firebase';
import { english, spanish } from '../text';
import { ProjectData } from '../types/types';
import { CardLoader } from './CardLoader';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({}) => {
	const [value, loading, error] = useCollection<ProjectData>(colRef);

	const locale = useSelector((state: RootState) => state.text.locale);

	const text = locale === 'en' ? english : spanish;

	return (
		<div
			className='container flex items-center justify-between w-full px-8 mx-auto mt-64 md:px-14 lg:px-24'
			id='projects'
		>
			<section className='w-full'>
				<h2 id='work' className='secondary-title'>
					{text.lang === 'English' ? 'My Projects' : 'Mis proyectos'}
				</h2>
				<p className='section-paragraph'>{text.home_projects_desc}</p>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{loading && (
						<>
							<CardLoader />
							<CardLoader />
							<CardLoader />
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

					<Link href='/projects'>
						<a className='w-full col-span-1 py-2 text-center uppercase transition-all duration-300 transform md:col-span-2 lg:col-span-3 left-2 bg-badge hover:bg-theme hover:translate-x-3'>
							{text.lang === 'English' ? 'More Projects' : 'Mas Proyectos'}
						</a>
					</Link>
				</div>
			</section>
		</div>
	);
};
