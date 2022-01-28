import Link from 'next/link';
import React from 'react';
import { ProjectData } from '../utils/types';

interface ProjectCardProps {
	project: ProjectData;
	id: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, id }) => {
	return (
		<Link href={`/projects/${id}`}>
			<div className='relative cursor-pointer select-none group shadow  shadow-white/5'>
				<img
					src={project?.images[0]}
					className='object-cover w-full h-40 bg-nav lg:h-72'
				/>
				<span className='absolute top-0 z-10 flex items-center justify-center w-full h-40 text-xl uppercase transition-opacity duration-300 bg-black bg-opacity-25 opacity-0 lg:h-72 group-hover:opacity-100'>
					{project?.title}
				</span>
			</div>
		</Link>
	);
};
