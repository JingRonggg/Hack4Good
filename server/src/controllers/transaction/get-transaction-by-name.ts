import { Request, Response } from "express";
import Transaction from "../../models/Transaction";

export const getTransactionByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const username = req.params.username;
        const transaction = await Transaction.find({ username });

        if (!transaction) {
            res.status(404).json({ message: 'Transaction not found' });
        }
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export default getTransactionByName;