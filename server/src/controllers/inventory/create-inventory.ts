import Inventory from '../../models/Inventory.js';
import { Request, Response } from 'express';

export const createInventory = async (req: Request, res: Response) => {
    try {
        const { name, quantity, price, status, image, description } = req.body;
        const inventory = new Inventory({ name, quantity, price, status, image, description });
        const savedInventory = await inventory.save();
        res.status(201).json(savedInventory);
    } catch (error) {
        res.status(400).json({
            error: (error as Error).message,
        });
    }
}

export default createInventory;