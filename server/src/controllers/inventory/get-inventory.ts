import Inventory from '../../models/Inventory.js';
import { Request, Response } from 'express';

export const getInventory = async (_req: Request, res: Response) => {
    try {
        const inventory = await Inventory.find();
        res.status(200).json(inventory);
    } catch (error) {
        res.status(400).json({
            error: "Error in fetching inventory",
            details: (error as Error).message,
        });
    }
}

export default getInventory;