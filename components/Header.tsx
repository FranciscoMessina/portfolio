import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useWindowSize } from '../hooks/useWindowSize';
import { DataText } from '../text';

interface HeaderProps {
	text: DataText;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
	const [open, setOpen] = useState(false);
	const { width } = useWindowSize();

	if (width && width! > 768 && open) {
		setOpen(false);
	}

	const toggleMobileMenu = () => {
		setOpen(!open);
	};

	useEffect(() => {
		function handleScroll() {
			if (open) setOpen(false);
		}
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});

	return (
		<header className='sticky top-0 z-50 py-6 bg-body bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 md'>
			<div className='container flex items-center justify-between w-full px-6 mx-auto lg:px-24'>
				<div className='text-xl font-bold'>Francisco.Messina</div>

				<div
					className={`${
						open ? 'mobile-menu' : 'desktop-menu'
					} transition-all duration-300`}
				>
					<a href='#' className='text-selected-text nav-item'>
						{text.nav.home}
					</a>
					<a href='#projects' className='nav-item'>
						{text.nav.projects}
					</a>
					<a href='#about' className='nav-item'>
						{text.nav.about}
					</a>
					<a href='#contact' className='nav-item'>
						<button
							className='px-6 py-2 font-bold transition-all duration-200 transform bg-theme hover:translate-x-2 active:scale-95'
							style={{ color: 'white' }}
						>
							{text.nav.contact}
						</button>
					</a>
					<MdClose
						className='absolute right-4 md:hidden'
						size={'1.5rem'}
						onClick={toggleMobileMenu}
					/>
				</div>
				<div className='md:hidden'>
					<svg
						width='26'
						height='18'
						viewBox='0 0 26 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						onClick={toggleMobileMenu}
					>
						<path
							d='M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z'
							fill='white'
						/>
					</svg>
				</div>
			</div>
		</header>
	);
};
