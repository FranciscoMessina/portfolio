import { IconButton } from '@mui/material';
import React from 'react';
import { MdArrowUpward, MdLanguage } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { swap } from '../features/text/textSlice';
import { DataText, english, spanish } from '../text';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
	const dispatch = useDispatch();
	const locale = useSelector((state: RootState) => state.text.locale);

	const text = locale === 'en' ? english : spanish;

	return (
		<footer className='container flex items-center justify-between w-full h-32 px-8 mx-auto border-t mt-52 md:px-14 lg:px-24 lg:h-96'>
			<div>
				<IconButton sx={{ color: 'white' }} href='#'>
					<MdArrowUpward size={'1.5rem'} />
				</IconButton>
			</div>
			<div
				className='flex items-center gap-2 cursor-pointer select-none '
				onClick={() => {
					dispatch(swap());
					setTimeout(() => window.scroll({ top: 0, behavior: 'smooth' }), 500);
				}}
			>
				<MdLanguage size={'1.5rem'} />
				<span className='text-xl '>{text.lang}</span>
			</div>
		</footer>
	);
};
