import { CircularProgress } from '@mui/material';
import { getAuth } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { MdClose } from 'react-icons/md';
import { app, colRef, logOut } from '../../firebase/firebase';
import { useWindowSize } from '../../hooks/useWindowSize';
import { ProjectData } from '../../utils/types';

function Admin() {
	const router = useRouter();
	const [user, loading, error] = useAuthState(getAuth(app));

	const [value, projLoading, projErr] = useCollection<ProjectData>(colRef);

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

	if (loading)
		return (
			<div className='flex items-center justify-center h-screen'>
				<CircularProgress sx={{ color: 'purple' }} />
			</div>
		);

	if (!user)
		return (
			<p className='text-center flex items-center justify-center h-full min-h-[700px]'>
				<span>
					Hello! I think maybe you are lost, you should not be here, do you want
					to go back to the{' '}
					<Link href='/'>
						<a className='text-blue-500 underline cursor-pointer'>home page</a>
					</Link>
					?
				</span>
			</p>
		);

	return (
		<>
			<header className='sticky top-0 z-50 py-6 bg-body bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 md'>
				<div className='container flex items-center justify-between w-full px-6 mx-auto lg:px-24'>
					<div className='text-xl font-bold'>
						<Link href={'/'}>Francisco.Messina</Link>
					</div>

					<nav
						className={`${
							open ? 'mobile-menu' : 'desktop-menu'
						} transition-all duration-300`}
					>
						<button
							type='submit'
							className='px-4 py-2 transition-transform  duration-300 transform bg-emerald-600 hover:translate-x-2'
							onClick={() => {
								router.replace('/admin/create');
							}}
						>
							New Project
						</button>
						<button
							type='submit'
							className='px-4 py-2 transition-transform  duration-300 transform bg-theme hover:translate-x-2'
							onClick={() => {
								logOut();
								router.replace('/');
							}}
						>
							Logout
						</button>

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
			<div className='container flex flex-col items-center gap-4 justify-center w-full px-8 mx-auto mt-32 md:px-14 lg:px-24'>
				{value?.docs.map(project => (
					<div
						key={project.id}
						className='w-full max-w-2xl bg-nav border-b-2 border-theme px-4 py-2 flex justify-between'
					>
						<span>{project.data().title}</span>
						<div className='space-x-2 md:space-x-4'>
							<Link href={`/admin/edit/${project.id}`}>
								<a className='bg-amber-500 px-1 uppercase shadow shadow-amber-500/70'>
									Edit
								</a>
							</Link>
							<button className='bg-red-500 px-1 uppercase shadow shadow-red-500/70'>
								delete
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default Admin;
