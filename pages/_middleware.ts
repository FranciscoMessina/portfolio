import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { app } from '../firebase/firebase';
import { getAuth } from 'firebase/auth';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
	const auth = getAuth(app);
	const user = auth.currentUser;

	// console.log(auth);

	// console.log(user);

	const { pathname } = req.nextUrl;

	if (!user && pathname.includes('admin')) {
		return NextResponse.redirect('/login');
	}

	return NextResponse.next();
}
