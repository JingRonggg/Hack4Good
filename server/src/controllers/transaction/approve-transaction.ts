import Transaction from '../../models/Transaction.js';
import Inventory from '../../models/Inventory.js';
import { Request, Response } from 'express';

export const approveTransaction = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const transaction = await Transaction.findById(id);

        if (!transaction) {
            res.status(404).json({
                error: "Transaction not found",
            });
            return;
        }

        if (transaction.status !== 'pending') {
            res.status(400).json({
                error: "Transaction status is not pending.",
            });
            return;
        }

        const inventoryItem = await Inventory.findOne({ name: transaction.item });

        if (!inventoryItem) {
            res.status(400).json({
                error: "Transaction cannot be approved. Item does not exist in inventory.",
            });
            return;
        }

        if (inventoryItem.quantity < 1) {
            res.status(400).json({
                error: "Transaction cannot be approved. Insufficient quantity for the item in inventory.",
            });
            return;
        }

        transaction.status = 'approved';
        const updatedTransaction = await transaction.save();

        inventoryItem.quantity -= 1;
        await inventoryItem.save();

        res.status(200).json(updatedTransaction);
    } catch (error) {
        res.status(500).json({
            error: "Error in approving transaction",
            details: (error as Error).message,
        });
    }
};

export default approveTransaction;
