import { Request, Response } from 'express';
import Account from '../../models/Account.js';

export const deleteAccount = async (req: Request, res: Response) => {
    try {
        const { username } = req.params;
        const account = await Account.findOneAndDelete({ username });

        if (!account) {
            res.status(404).json({
                error: "Account not found",
            });
            return;
        }

        res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
        res.status(500).json({
            error: "Error in deleting account",
            details: (error as Error).message,
        });
    }
};

export default deleteAccount;