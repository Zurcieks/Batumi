import { NextApiRequest, NextApiResponse } from 'next';

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  // Proste sprawdzenie danych logowania (w przyszłości można użyć bazy danych)
  if (username === 'admin' && password === 'admin') {
    // Ustawiamy ciasteczko z tokenem po zalogowaniu
    res.setHeader('Set-Cookie', `auth-token=someRandomToken; HttpOnly; Path=/; Max-Age=3600`);

    return res.status(200).json({ message: 'Zalogowano pomyślnie.' });
  }

  return res.status(401).json({ message: 'Niepoprawne dane logowania' });
}
