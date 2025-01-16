import { Request, Response } from 'express';
import Account from '../../models/Account';

export const getByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const username = req.params.username;
    const account = await Account.findOne({ username });

    if (!account) {
      res.status(404).json({ message: 'Account not found' });
      return;
    }

    res.json(account);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export default getByName;