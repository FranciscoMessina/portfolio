import { useEffect, useState } from 'react';
import { uploadImage } from '../firebase/firebase';

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
	}, [file, onSuccess]);

	return null;
}
