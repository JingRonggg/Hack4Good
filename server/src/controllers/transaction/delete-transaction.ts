import Transaction from '../../models/Transaction.js';
import { Request, Response } from 'express';

export const deleteTransaction = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const transaction = await Transaction.findByIdAndDelete(id);
        if(!transaction) {
            res.status(404).json({
                error: "Transaction not found",
            })
            return 
        }

        res.status(201).json({message: "Transaction deleted successfully"});
    } catch(error) {
        res.status(400).json({
            error: "Error in deleting transaction",
            details: (error as Error).message,
        })
    }
}

export default deleteTransaction;