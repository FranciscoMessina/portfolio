import { projectManagement } from 'firebase-admin';
import Link from 'next/link';
import React from 'react';
import { ProjectData } from '../lib/types';

interface ProjectCardProps {
	id?: number;
	img?: string;
	title?: string;
	project?: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
	img,
	title,
	id,
	project,
}) => {
	return (
		<Link href={`/projects/${id || project.id}`}>
			<div className='relative cursor-pointer select-none group '>
				<img src={img} className='object-cover w-full h-40 bg-nav lg:h-72' />
				<span className='absolute top-0 z-10 flex items-center justify-center w-full h-40 text-xl uppercase transition-opacity duration-300 bg-black bg-opacity-25 opacity-0 lg:h-72 group-hover:opacity-100'>
					{title}
				</span>
			</div>
		</Link>
	);
};
