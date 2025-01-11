import Transaction from '../../models/Transaction.js';
import { Request, Response } from 'express';

export const updateTransaction = async (req: Request ,res: Response) => {
    try{
        const { id } = req.params;
        const { item, status, user} = req.body;
        const transaction = await Transaction.findByIdAndUpdate(
            id,
            { item, status, user },
            { new: true, runValidators: true }
        )

        if (!transaction) {
            res.status(404).json({
                error: "Transaction not found",
            })
            return
        }

        res.status(200).json(transaction)

    } catch (error) {
        res.status(500).json({
            error:"Error in updating transaction",
            details:(error as Error).message,
        })
    }
}

export default updateTransaction;