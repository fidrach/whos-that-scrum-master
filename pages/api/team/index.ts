import { Member, Person, Team } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../lib/prisma';

export type TeamResponse = TeamData[];
export type TeamData = Team & { person: Member & { person: Person } };
export type TeamRequest = Pick<Team, 'name'>;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req;

    switch (method) {
        case 'GET':
            try {
                const team = await prisma.team.findMany({
                    include: {
                        person: {
                            include: {
                                person: true,
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
        case 'POST':
            try {
                const team = await prisma.team.create({
                    data: {
                        name: body.name,
                    },
                });
                res.status(200).json(team);
            } catch (e) {
                console.error('Request error', e);
                res.status(500).json({ error: 'Error posting team' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
};
