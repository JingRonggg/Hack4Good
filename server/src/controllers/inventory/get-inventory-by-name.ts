import Inventory from '../../models/Inventory.js';
import { Request, Response } from 'express';

export const getInventoryByName = async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        const inventory = await Inventory.findOne({ name });
        if (!inventory) {
            res.status(404).json({
                error: "Inventory not found",
            });
            return;
        }
        res.status(200).json(inventory);
    } catch (error) {
        res.status(500).json({
            error: "Error in fetching inventory",
            details: (error as Error).message,
        });
    }
};

export default getInventoryByName;