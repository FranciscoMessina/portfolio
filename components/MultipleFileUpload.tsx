import { useField } from 'formik';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { FileError, FileRejection, useDropzone } from 'react-dropzone';
import { SingleFileUpload } from './SingleFileUpload';

export interface UploadableFile {
	file: File;
	errors: FileError[];
	url?: string;
}

export interface MultipleFileUploadProps {
	name: string;
	push?: (link: string) => void;
	remove?: (index: number) => void;
}

const getColor = (props: any) => {
	if (props.isDragAccept) {
		return '#00e676';
	}
	if (props.isDragReject) {
		return '#ff1744';
	}
	if (props.isFocused) {
		return '#2196f3';
	}
	return '#eeeeee';
};

export function MultipleFileUpload({
	name,
	push,
	remove,
}: MultipleFileUploadProps) {
	const [files, setFiles] = useState<UploadableFile[]>([]);
	// console.log(files);

	const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
		const mappedAcc = accFiles.map(file => ({ file, errors: [] }));

		setFiles(curr => [...curr, ...mappedAcc, ...rejFiles]);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: 'image/*',
	});

	function onDelete(file: File) {
		setFiles(curr => curr.filter(fw => fw.file !== file));
	}

	function onSuccess(file: File, url: string) {
		console.log(file);

		setFiles(curr =>
			curr.map(fw => {
				if (fw.file === file) {
					return { file, url, errors: [] };
				}
				return fw;
			})
		);
		push!(url);
		// console.log(files);
	}

	return (
		<Fragment>
			<div
				{...getRootProps()}
				className='border-2 border-theme h-40 flex items-center justify-center w-40 cursor-pointer min-w-[160px]'
			>
				<input {...getInputProps()} />

				<p>Upload Images</p>
			</div>

			{files.map((fileWrapper, index) => (
				<SingleFileUpload
					file={fileWrapper.file}
					key={index}
					onSuccess={onSuccess}
					onDelete={onDelete}
				/>
			))}
		</Fragment>
	);
}
