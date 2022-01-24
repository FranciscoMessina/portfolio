import React from 'react';
import { DiCss3, DiGit, DiHtml5, DiNodejsSmall, DiReact } from 'react-icons/di';
import {
	SiExpress,
	SiJavascript,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

import { DataText } from '../text';

interface AboutMeProps {
	text: DataText;
}

export const AboutMe: React.FC<AboutMeProps> = ({ text }) => {
	return (
		<div className='container flex flex-col items-center justify-between w-full px-8 mx-auto mt-64 md:px-14 lg:px-24'>
			<section className='w-full'>
				<h2 id='about' className='secondary-title'>
					{text.lang === 'English' ? 'About me' : 'Sobre mi'}
				</h2>
				<p className='section-paragraph'>{text.about_me}</p>
			</section>
			<section className='flex flex-col self-end w-full mt-16'>
				<h3 id='skills' className='text-2xl'>
					{text.lang === 'English' ? 'My skills' : 'Habilidades'}
				</h3>
				<p className='section-paragraph'>{text.skills}</p>
				<div className=''>
					<ul className='flex flex-wrap gap-4'>
						<li className='relative group'>
							<DiReact size={'2.5rem'} />
						</li>
						<li className='relative group'>
							<DiNodejsSmall size={'2.5rem'} />
						</li>
						<li className='relative group'>
							<SiTypescript size={'2.5rem'} />
						</li>
						<li className='relative group'>
							<SiJavascript size={'2.5rem'} />
						</li>
						<li className='relative group'>
							<SiTailwindcss size={'2.5rem'} />
						</li>
						<li className='relative group'>
							<SiExpress size={'2.5rem'} />
						</li>
						<li className='relative group'>
							<DiGit size={'2.5rem'} />
						</li>
						<li className='relative group'>
							<DiHtml5 size={'2.5rem'} />
						</li>
						<li className='relative group'>
							<DiCss3 size={'2.5rem'} />
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
};
