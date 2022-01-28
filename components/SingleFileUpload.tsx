import { Grid, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { uploadImage } from '../firebase/firebase';
import { FileHeader } from './FileHeader';

export interface SingleFileUploadProps {
	file: File;
	onSuccess: (file: File, url: string) => void;
	onDelete: (file: File) => void;
}

export function SingleFileUpload({
	file,
	onSuccess,
	onDelete,
}: SingleFileUploadProps) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		uploadImage(file, setProgress, onSuccess);
	}, [file]);

	return null;
}
