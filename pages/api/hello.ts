// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const colors = await prisma.color.findMany();
    res.status(200).json({ name: 'John Doe', colors } as any);
  } catch (e) {
    console.error('Request error', e);
    res.status(500).json({ error: 'Error fetching posts' } as any);
  }
}
