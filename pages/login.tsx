import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React from 'react';
import { Header } from '../components/Header';
import {
	createUserWithEmail,
	signInWithEmail,
	UserData,
} from '../firebase/firebase';
import { english } from '../text';

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
	const handleSubmit = async (values: any, helpers: any) => {
		console.log(values);
		// const userCred = await createUserWithEmail(values);
		const algo = await signInWithEmail(values);

		console.log(algo);
	};

	return (
		<>
			<Header text={english} />
			<div className='container flex flex-col items-center justify-center w-full px-8 mx-auto mt-32 md:px-14 lg:px-24'>
				<p className='mb-16 text-center'>
					Hello! I think maybe you are lost, you should not be here, do you want
					to go back to the{' '}
					<Link href='/'>
						<span className='text-blue-500 underline'>home page</span>
					</Link>
					?
				</p>
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={handleSubmit}
				>
					<Form>
						<Field name='email'>
							{({ field, form, meta }) => (
								<div className='flex flex-col'>
									<label htmlFor='email'>Email:</label>
									<input
										type='email'
										placeholder='Email'
										{...field}
										className='px-4 py-2 mt-2 mb-6 text-gray-800 outline-none '
									/>
								</div>
							)}
						</Field>
						<Field name='password'>
							{({ field, form, meta }) => (
								<div className='flex flex-col'>
									<label htmlFor='password'>Password:</label>
									<input
										type='password'
										placeholder='Password'
										{...field}
										className='px-4 py-2 mt-2 mb-6 text-gray-800 outline-none '
									/>
								</div>
							)}
						</Field>
						<button
							type='submit'
							className='w-full py-2 transition-transform duration-300 transform bg-theme hover:translate-x-2'
						>
							Login
						</button>
					</Form>
				</Formik>
			</div>
		</>
	);
};

export default Login;
