import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../db.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const q = req.query.q as string;

	const results = db.filter(product => {
		const { title } = product;
		return title.toLowerCase().includes(q.toLowerCase());
	});

	res.status(200).json(results);
}
