import { useField } from 'formik';

function InputField({ label = 'Label', name, textarea = false, ...props }) {
	const [field, meta, helpers] = useField(name);

	return (
		<>
			<label className='flex flex-col flex-grow my-4'>
				<span className='mb-2'>{label}</span>
				{!textarea ? (
					<input
						{...field}
						{...props}
						className='px-4 py-2 mt-2 mb-6 text-gray-800 outline-none'
					/>
				) : (
					<textarea
						{...field}
						{...props}
						className='h-40 px-4 py-2 mt-2 mb-6 text-gray-800 outline-none resize-none'
					/>
				)}
			</label>
			{meta.touched && meta.error ? (
				<div className='text-red-600'>{meta.error}</div>
			) : null}
		</>
	);
}

export default InputField;
