import { NextApiRequest, NextApiResponse } from 'next';

export default function adminPanelHandler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies['auth-token'];

  if (!token) {
    return res.status(401).json({ message: 'Brak autoryzacji' });
  }

  // Reszta logiki panelu admina
  return res.status(200).json({ message: 'Witaj w panelu admina' });
}
