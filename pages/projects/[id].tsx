import { useRouter } from 'next/router';
import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Slideshow } from '../../components/Slideshow';

const images = ['../../1.jpg', '../../1.jpg', '../../1.jpg'];

// https://source.unsplash.com/random
function Project() {
	const router = useRouter();
	const { id } = router.query;

	const tags = ['React', 'HTML', 'Javascript', 'Node.js', 'Mastermind'];

	return (
		<div>
			<Header />

			<main className='container flex items-center justify-between w-full px-8 mx-auto mt-32 md:px-14 lg:px-24'>
				<section className='w-full'>
					<div className=''>
						<h3 className='text-2xl mt-4'>Netflix Clone</h3>
						<div className='flex flex-wrap gap-2 my-5'>
							{tags.map((tag, idx) => (
								<span className='bg-theme p-1 text-xs' key={idx}>
									{tag}
								</span>
							))}
						</div>
						{images.length > 1 ? (
							<Slideshow images={images} />
						) : (
							<img
								src={images[0]}
								alt=''
								className='object-cover w-full bg-nav max-h-[720px]'
							/>
						)}

						<div className='flex flex-col'>
							<p className='w-full  my-6 text-secondary'>
								This is netflix clone, with user accounts, favorite movies and
								series list, ets... Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Dignissimos eaque aperiam cumque maxime
								expedita repudiandae nobis ut minus modi inventore, quae
								laudantium blanditiis recusandae tempora amet dolores adipisci
								eius dolorem quibusdam? Natus nam soluta eius assumenda veniam
								aliquam quod repellendus. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Natus adipisci magni ab repellat distinctio
								soluta nemo necessitatibus perspiciatis laudantium minus. Lorem
								ipsum dolor sit amet consectetur adipisicing elit. Sed qui totam
								nisi nemo corporis exercitationem provident aliquam sapiente?
								Quasi doloremque expedita sit mollitia quia necessitatibus,
								autem illum harum nemo, molestias dolorem facilis dolor totam
								nesciunt modi ea id aliquid sunt!
							</p>
							<div className='flex gap-6 md:self-end'>
								<a
									href='http://github.com'
									target='_blank'
									rel='noopener noreferrer'
									className='transition-all duration-200 transform bg-theme hover:translate-x-2 active:scale-95 px-4 py-2'
								>
									Github
								</a>
								<a
									href='http://github.com'
									target='_blank'
									rel='noopener noreferrer'
									className='transition-all duration-200 transform bg-theme hover:translate-x-2 active:scale-95 px-4 py-2'
								>
									Deployment
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default Project;
