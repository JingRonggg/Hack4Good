import Inventory from '../../models/Inventory.js';
import { Request, Response } from 'express';

export const updateInventory = async (req: Request ,res: Response) => {
    try{
        const { id } = req.params;
        const { name, quantity, price, status } = req.body;
        const inventory = await Inventory.findByIdAndUpdate(
            id,
            { name, quantity, price, status },
            { new: true, runValidators: true }
        )

        if (!inventory) {
            res.status(404).json({
                error: "Inventory not found",
            })
            return
        }

        res.status(200).json(inventory)

    } catch (error) {
        res.status(500).json({
            error:"Error in updating inventory",
            details:(error as Error).message,
        })
    }
}

export default updateInventory;