/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Slideshow } from '../../components/Slideshow';
import { getProject } from '../../firebase/firebase';

// https://source.unsplash.com/random
function Project({
	project,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const router = useRouter();
	const { id } = router.query;

	const locale = useSelector((state: RootState) => state.text.locale);
	// const docRef = doc(
	// 	db,
	// 	'projects',
	// 	id! as string
	// ) as DocumentReference<ProjectData>;

	// const [value, loading, error] = useDocument<ProjectData>(docRef);

	return (
		<div>
			<Header />

			<main className='container flex items-center justify-between w-full px-8 mx-auto mt-32 md:px-14 lg:px-24'>
				<section className='w-full'>
					<div className=''>
						<h3 className='text-2xl mt-4'>{project?.title}</h3>
						<div className='flex flex-wrap gap-2 my-5'>
							{project?.tags?.map((tag: string, idx: number) => (
								<span className='bg-theme p-1 text-xs' key={idx}>
									{tag}
								</span>
							))}
						</div>
						{project?.images?.length! > 1 ? (
							<Slideshow images={project?.images!} />
						) : (
							<img
								src={project?.images![0]}
								alt=''
								className='object-cover w-full bg-nav max-h-[720px]'
							/>
						)}

						<div className='flex flex-col'>
							<p className='w-full  my-6 text-secondary'>
								{locale === 'en'
									? project?.description_en
									: project?.description_es}
							</p>
							<div className='flex gap-6 md:self-end'>
								<a
									href={project?.source}
									target='_blank'
									rel='noopener noreferrer'
									className='transition-all duration-200 transform bg-theme hover:translate-x-2 active:scale-95 px-4 py-2'
								>
									Github
								</a>
								<a
									href={project?.visit}
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

export const getServerSideProps: GetServerSideProps = async context => {
	const project = await getProject(context?.params?.id! as string);

	return {
		props: {
			project,
		},
	};
};
