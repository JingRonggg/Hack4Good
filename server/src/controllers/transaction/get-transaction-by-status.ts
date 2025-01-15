import Transaction from '../../models/Transaction.js';
import { Request, Response } from 'express';

export const getTransactionByStatus = async (req: Request, res: Response) => {
    try {
        const { status } = req.params;
        const transactions = await Transaction.find({ status });
        if (!transactions || transactions.length === 0) {
            res.status(404).json({
                error: "No transactions found for the given status",
            });
            return;
        }
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({
            error: "Error in fetching transactions",
            details: (error as Error).message,
        });
    }
}

export default getTransactionByStatus;