import { getAuth } from 'firebase/auth';
import { app } from '../firebase/firebase';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useCheckAuth() {
	const router = useRouter();

	const auth = getAuth(app);

	const [user, loading, error] = useAuthState(auth);

	console.log(loading);
	console.log(user);

	useEffect(() => {
		if (!loading && !user) {
			router.replace('/login');
		}

		return () => {};
	}, []);
}
