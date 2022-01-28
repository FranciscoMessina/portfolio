// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytes,
	uploadBytesResumable,
} from 'firebase/storage';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import {
	getFirestore,
	collection,
	getDocs,
	getDoc,
	addDoc,
	deleteDoc,
	updateDoc,
	doc,
} from 'firebase/firestore';
import { ProjectData } from '../utils/types';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBvW3A_QN0bnSVC0uhYY5s1zWgQ0hx-VDU',
	authDomain: 'main-34e01.firebaseapp.com',
	projectId: 'main-34e01',
	storageBucket: 'main-34e01.appspot.com',
	messagingSenderId: '456649925403',
	appId: '1:456649925403:web:ca4ee92eba57e075d1e9be',
	measurementId: 'G-MNT7F3HXMP',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Authentication
const auth = getAuth(app);

export interface UserData {
	email: string;
	password: string;
}

export const createUserWithEmail = async (userData: UserData) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			userData.email,
			userData.password
		);

		console.log(userCredential);

		return userCredential;
	} catch (err) {
		console.log(err);
		return err;
	}
};

export const signInWithEmail = async (userData: UserData) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			userData.email,
			userData.password
		);

		return userCredential;
	} catch (err) {
		console.log(err);
	}
};

export const logOut = async () => {
	try {
		await signOut(auth);
	} catch (err) {
		console.log(err);
	}
};

// Storage Bucket for IMages
const storage = getStorage(app);
export const imagesRef = ref(storage, 'images');

export const uploadImage = async (
	file: File,
	onProgress: (percentage: number) => void,
	onSuccess: (file: File, url: string) => void
) => {
	const uploadRef = ref(imagesRef, Date.now().toString());
	let imageUrl: string = 'failed';

	const uploadTask = uploadBytesResumable(uploadRef, file);

	uploadTask.on(
		'state_changed',
		snapshot => {
			// Observe state change events such as progress, pause, and resume
			// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log('Upload is ' + progress + '% done');
			onProgress(Math.round(progress));
			switch (snapshot.state) {
				case 'paused':
					console.log('Upload is paused');
					break;
				case 'running':
					console.log('Upload is running');
					break;
			}
		},
		error => {
			// Handle unsuccessful uploads
			console.log(error);
		},
		() => {
			// Handle successful uploads on complete
			// For instance, get the download URL: https://firebasestorage.googleapis.com/...
			getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
				console.log('File available at', downloadURL);
				onSuccess(file, downloadURL);
			});
		}
	);
};

// Projects Firestore
export const db = getFirestore(app);
export const colRef = collection(db, 'projects');

export const getProjects = async (): Promise<ProjectData[] | undefined> => {
	try {
		const snapshot = await getDocs(colRef);
		const projects: ProjectData[] = snapshot.docs.map(proj => {
			return { ...proj.data(), id: proj.id } as ProjectData;
		});

		return projects;
	} catch (err) {
		console.log(err);
	}
};

export const getProject = async (
	id: string
): Promise<ProjectData | undefined> => {
	// const docRef = ;

	try {
		const docSnap = await getDoc(doc(db, 'projects', id!));

		if (docSnap.exists()) {
			return { ...docSnap.data(), id: id } as ProjectData;
		}
	} catch (err) {
		console.log(err);
	}
};

export const addProject = async (data: ProjectData) => {
	const { description_en, description_es, images, tags, source, title, visit } =
		data;
	await addDoc(colRef, {
		title,
		visit,
		source,
		tags,
		images,
		description_en,
		description_es,
	});
};

export const updateProject = async ({ id, ...data }: ProjectData) => {
	const { description_en, description_es, images, tags, source, title, visit } =
		data;

	const docRef = doc(db, 'projects', id!);
	try {
		await updateDoc(docRef, {
			title,
			visit,
			source,
			images,
			tags,
			description_en,
			description_es,
		});
	} catch (err) {
		console.log(err);
	}
};

export const deleteProject = async (id: string) => {
	const docRef = doc(db, 'projects', id!);

	try {
		await deleteDoc(docRef);
		console.log('holii');
	} catch (err) {
		console.log(err);
	}
};
