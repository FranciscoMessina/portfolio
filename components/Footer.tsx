import { IconButton } from '@mui/material';
import React from 'react';
import { MdArrowUpward, MdLanguage } from 'react-icons/md';
import { DataText } from '../text';

interface FooterProps {
	changeLang: () => void;
	text: DataText;
}

export const Footer: React.FC<FooterProps> = ({ changeLang, text }) => {
	return (
		<footer className='container flex items-center justify-between w-full h-32 px-8 mx-auto border-t mt-52 md:px-14 lg:px-24'>
			<div>
				<IconButton sx={{ color: 'white' }} href='#'>
					<MdArrowUpward size={'1.5rem'} />
				</IconButton>
			</div>
			<div
				className='flex items-center gap-2 cursor-pointer select-none '
				onClick={() => {
					changeLang();
					setTimeout(() => window.scroll({ top: 0, behavior: 'smooth' }), 500);
				}}
			>
				<MdLanguage size={'1.5rem'} />
				<span className='text-xl '>{text.lang}</span>
			</div>
		</footer>
	);
};
