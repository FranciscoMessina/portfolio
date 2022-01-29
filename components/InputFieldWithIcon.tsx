import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useField } from 'formik';
import React from 'react';

interface InputFieldWithIconProps {
	label?: string;
	name: string;
	textarea?: boolean;
	icon: ReactJSXElement;
	iconAction?: () => void;
}

function InputFieldWithIcon({
	label = 'Label',
	name,
	icon,
	iconAction,
	...props
}: InputFieldWithIconProps) {
	const [field, meta, helpers] = useField(name);

	return (
		<>
			<label className='flex flex-col flex-grow my-2 relative'>
				<span className='mb-2'>{label}</span>

				<input
					{...field}
					{...props}
					className='px-4 py-2 mt-2 mb-6 text-gray-800 outline-none w-36'
				/>
				<button
					className='absolute bottom-7 right-1 text-badge'
					onClick={iconAction}
				>
					{icon}
				</button>
			</label>
			{meta.touched && meta.error ? (
				<div className='text-red-600'>{meta.error}</div>
			) : null}
		</>
	);
}

export default InputFieldWithIcon;
