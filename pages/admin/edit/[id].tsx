/* eslint-disable @next/next/no-img-element */
import { IconButton, Link } from '@mui/material';
import { getAuth } from 'firebase/auth';
import { FieldArray, Form, Formik } from 'formik';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdDelete } from 'react-icons/md';
import InputField from '../../../components/InputField';
import InputFieldWithIcon from '../../../components/InputFieldWithIcon';
import { MultipleFileUpload } from '../../../components/MultipleFileUpload';
import {
	app,
	deleteImg,
	getProject,
	updateProject,
} from '../../../firebase/firebase';
import { ProjectData } from '../../../types/types';

function Edit({ project }: InferGetServerSidePropsType<GetServerSideProps>) {
	const router = useRouter();
	const id = router.query.id;

	let initialValues: ProjectData = project || {
		title: '',
		description_en: '',
		description_es: '',
		images: [],
		tags: [],
		source: '',
		visit: '',
	};

	const [user, loading, error] = useAuthState(getAuth(app));

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
		<div className='flex items-center justify-center w-full mx-auto'>
			<Formik
				initialValues={initialValues}
				onSubmit={async values => {
					await updateProject({ id: id as string, ...values });
					router.push(`/projects/${id}`);
				}}
			>
				{({ values }) => (
					<Form className='w-[760px]'>
						{/* {JSON.stringify(values.images)} */}
						<InputField label='Title' name='title' />
						<div className='flex gap-4'>
							<InputField label='Github link' name='source' />
							<InputField label='Deploy link' name='visit' />
						</div>
						<div className='flex gap-4'>
							<InputField
								label='Description English'
								name='description_en'
								textarea
							/>
							<InputField
								label='Descripcion Espa??ol'
								name='description_es'
								textarea
							/>
						</div>

						<FieldArray name='tags'>
							{({ insert, remove, push }) => (
								<div>
									<div className='flex gap-2 flex-wrap'>
										{values.tags.length > 0 &&
											values.tags.map((friend, index) => (
												<div className='flex' key={index}>
													<InputFieldWithIcon
														label={`Tag ${index + 1}`}
														name={`tags.${index}`}
														iconAction={() => remove(index)}
														icon={<MdDelete size={'2rem'} />}
													/>
												</div>
											))}
									</div>
									<button
										type='button'
										className=' px-4 py-2 my-4 bg-purple-600 '
										onClick={() => push('')}
									>
										Add Tag
									</button>
								</div>
							)}
						</FieldArray>

						<FieldArray name='images'>
							{({ insert, remove, push }) => (
								<div className='flex gap-2 items-center'>
									<MultipleFileUpload
										name='images'
										push={push}
										remove={remove}
									/>
									<div className='flex gap-2 overflow-x-scroll scrollbar-hide w-[760px] '>
										{values.images.length > 0 &&
											values.images.map((link, index) => (
												<div className='relative my-4 group ' key={index}>
													<img
														src={link}
														alt='image'
														className='w-40 h-40 min-w-[160px]'
													/>

													<div className='absolute flex items-center justify-center h-40 transition-all duration-300 bg-black opacity-0 bg-opacity-20 w-40 min-w-[160px] group-hover:opacity-100 top-0'>
														<MdDelete
															size={'2rem'}
															onClick={() => {
																remove(index);
																deleteImg(link);
															}}
															color='white'
															className='cursor-pointer'
														/>
													</div>
												</div>
											))}
									</div>
								</div>
							)}
						</FieldArray>
						{/* {values.images.length > 0 &&
							values.images.map((image, index) => {
								<img src={image} alt='lol' />;
							})} */}

						<div className='flex gap-4'>
							<button
								type='button'
								className='w-full px-4 py-2 my-4 bg-red-500 '
								onClick={() => router.replace('/admin')}
							>
								Cancel
							</button>
							<button
								type='submit'
								className='w-full px-4 py-2 my-4 bg-green-500 '
							>
								Edit Project
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Edit;

export const getServerSideProps: GetServerSideProps = async context => {
	const project = await getProject(context?.params?.id! as string);

	if (!project) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			project,
		},
	};
};
