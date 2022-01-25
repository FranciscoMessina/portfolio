import { IconButton } from '@mui/material';
import React from 'react';
import { DataText, english, spanish } from '../text';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

interface ContactMeProps {}

export const ContactMe: React.FC<ContactMeProps> = ({}) => {
	const locale = useSelector((state: RootState) => state.text.locale);

	const text = locale === 'en' ? english : spanish;

	return (
		<div className='container flex items-center justify-between w-full px-8 mx-auto mt-64 md:px-14 lg:px-24'>
			<section className='w-full'>
				<h2 id='contact' className='secondary-title'>
					{text.lang === 'English'
						? 'Get in touch with me!'
						: 'Ponete en contacto conmigo!'}
				</h2>
				<p className='section-paragraph'>{text.contact}</p>

				<div className='grid w-full gap-8 mt-12 lg:grid-cols-2 lg:gap-32'>
					<div className='mt-12'>
						<p className='text-secondary'>555-555-1234</p>
						<a
							href='mailto:francisco@messina.ws'
							className='block mt-3 underline text-secondary'
						>
							francisco@messina.ws
						</a>

						<div className='flex mt-20 space-x-6'>
							<IconButton
								sx={{ color: 'white' }}
								href='https://github.com/FranciscoMessina'
								target='_blank'
								rel='noreferrer noopener'
							>
								<AiFillGithub size={'2rem'} />
							</IconButton>
							<IconButton
								sx={{ color: 'white' }}
								href='https://www.linkedin.com/in/francisco-messina/'
								target='_blank'
								rel='noreferrer noopener'
							>
								<AiFillLinkedin size={'2rem'} />
							</IconButton>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
