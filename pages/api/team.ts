import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const team = await prisma.team.findMany();
                res.status(200).json(team);
            } catch (e) {
                console.error('Request error', e);
                res.status(500).json({ error: 'Error fetching posts' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
};
