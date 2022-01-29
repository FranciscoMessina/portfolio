import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useWindowSize } from '../hooks/useWindowSize';
import { english, spanish } from '../text';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
	const router = useRouter();
	const locale = useSelector((state: RootState) => state.text.locale);

	const text = locale === 'en' ? english : spanish;

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

				<nav
					className={`${
						open ? 'mobile-menu' : 'desktop-menu'
					} transition-all duration-300`}
				>
					<Link href='/#'>
						<a href='' className='nav-item'>
							{text.nav.home}
						</a>
					</Link>
					<Link
						href={`${
							router.pathname.includes('projects') ? '/projects' : '/#projects'
						}`}
					>
						<a
							href=''
							className={`nav-item ${
								router.pathname.includes('projects') && 'text-selected-text'
							}`}
						>
							{text.nav.projects}
						</a>
					</Link>
					<Link href='/#about'>
						<a href='' className='nav-item'>
							{text.nav.about}
						</a>
					</Link>
					<Link href='/#contact'>
						<a
							className='px-6 py-2 font-bold transition-all duration-200 transform bg-theme hover:translate-x-2 active:scale-95 nav-item'
							style={{ color: 'white' }}
						>
							{text.nav.contact}
						</a>
					</Link>
					<MdClose
						className='absolute right-4 md:hidden cursor-pointer'
						size={'1.5rem'}
						onClick={toggleMobileMenu}
					/>
				</nav>
				<div className='md:hidden cursor-pointer'>
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
