/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { ProjectData } from '../utils/types';

interface ProjectCardProps {
	project: ProjectData;
	id: string;
	index: number;
}

const variantChild = {
	hide: {
		opacity: 0,
		x: -1000,
	},
	show: (custom: number) => ({
		opacity: 1,
		x: 0,
		transition: { delay: custom * 0.5, duration: 1 },
	}),
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
	project,
	id,
	index,
}) => {
	return (
		<motion.div
			variants={variantChild}
			initial='hide'
			animate='show'
			custom={index}
		>
			<Link href={`/projects/${id}`} passHref>
				<div className='relative cursor-pointer select-none group shadow  shadow-white/5'>
					<img
						src={project?.images[0]}
						className='object-cover w-full h-40 bg-nav lg:h-72'
						alt=''
					/>
					<span className='absolute top-0 z-10 flex items-center justify-center w-full h-40 text-xl uppercase transition-opacity duration-300 bg-black bg-opacity-25 opacity-0 lg:h-72 group-hover:opacity-100'>
						{project?.title}
					</span>
				</div>
			</Link>
		</motion.div>
	);
};
