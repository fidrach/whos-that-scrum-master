import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        method,
        body,
        query: { id },
    } = req;

    switch (method) {
        case 'GET':
            try {
                const team = await prisma.team.findUnique({
                    where: {
                        id: Number(id),
                    },
                    include: {
                        person: {
                            include: {
                                person: true,
                            },
                            orderBy: {
                                order: 'asc',
                            },
                        },
                    },
                });
                res.status(200).json(team);
            } catch (e) {
                console.error('Request error', e);
                res.status(500).json({ error: 'Error fetching team' });
            }
            break;
        case 'PATCH':
            try {
                const team = await prisma.team.update({
                    where: {
                        id: Number(id),
                    },
                    data: {
                        name: body.name,
                    },
                });
                res.status(200).json(team);
            } catch (e) {
                console.error('Request error', e);
                res.status(500).json({ error: 'Error patching team' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'PATCH']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
};
