import Inventory from '../../models/Inventory.js';
import { Request, Response } from 'express';

export const createInventory = async (req: Request, res: Response) => {
    try {
        const { name, quantity, price, status } = req.body;
        const inventory = new Inventory({ name, quantity, price, status });
        const savedInventory = await inventory.save();
        res.status(201).json(savedInventory);
    } catch (error) {
        res.status(400).json({
            error: "Error in creating model",
        });
    }
}

export default createInventory;