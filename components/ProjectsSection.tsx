import { useRouter } from 'next/router';
import React from 'react';
import { DataText } from '../text';

interface ProjectsSectionProps {
	text: DataText;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ text }) => {
	const router = useRouter();

	return (
		<div
			className='container flex items-center justify-between w-full px-8 mx-auto mt-64 md:px-14 lg:px-24'
			id='projects'
		>
			<section className='w-full'>
				<h2 id='work' className='secondary-title'>
					{text.lang === 'English' ? 'My Projects' : 'Mis proyectos'}
				</h2>
				<p className='section-paragraph'>{text.projects_desc}</p>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
					<div className='relative cursor-pointer select-none group '>
						<img
							src='https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
							className='object-cover w-full h-40 bg-nav lg:h-72'
						/>
						<span className='absolute top-0 z-10 flex items-center justify-center w-full h-40 text-xl uppercase transition-opacity duration-300 bg-black bg-opacity-25 opacity-0 lg:h-72 group-hover:opacity-100'>
							Netflix Clone
						</span>
					</div>
					<div className='relative cursor-pointer select-none group'>
						<img
							src='https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
							className='object-cover w-full h-40 bg-nav lg:h-72'
						/>
						<span className='absolute top-0 z-10 flex items-center justify-center w-full h-40 text-xl uppercase transition-opacity duration-300 bg-black bg-opacity-25 opacity-0 lg:h-72 group-hover:opacity-100'>
							Netflix Clone
						</span>
					</div>

					<button
						type='button'
						className='w-full col-span-1 py-2 text-center uppercase transition-all duration-300 transform md:col-span-2 lg:col-span-3 left-2 bg-badge hover:bg-theme hover:translate-x-3'
						onClick={() => router.push('/projects')}
					>
						{text.lang === 'English' ? 'More Projects' : 'Mas Proyectos'}
					</button>
				</div>
			</section>
		</div>
	);
};
