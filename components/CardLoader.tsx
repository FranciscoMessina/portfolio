import Link from 'next/link';
import React from 'react';
import { ProjectData } from '../utils/types';

interface CardLoaderProps {}

export const CardLoader: React.FC<CardLoaderProps> = ({}) => {
	return (
		<div className='relative animate-pulse select-none group animate-pulse bg-nav'>
			<img
				src='https://source.unsplash.com/random'
				className='object-cover w-full h-40 bg-nav lg:h-72 opacity-0'
			/>
			<span className='absolute top-0 z-10 flex items-center justify-center w-full h-40 text-xl uppercase transition-opacity duration-300 bg-black bg-opacity-25 opacity-0 lg:h-72 group-hover:opacity-100'></span>
		</div>
	);
};
