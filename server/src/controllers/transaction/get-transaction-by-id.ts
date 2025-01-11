import Transaction from '../../models/Transaction.js';
import { Request, Response } from 'express';

export const getTransactionById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findById(id);
        if (!transaction) {
            res.status(404).json({
                error: "Transaction not found",
            });
            return;
        }
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({
            error: "Error in fetching transaction",
            details: (error as Error).message,
        });
    }
}

export default getTransactionById;