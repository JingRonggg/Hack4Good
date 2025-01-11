import Inventory from '../../models/Inventory.js';
import { Request, Response } from 'express';

const deleteInventroy = async (req: Request, res: Response) => {
    try{
        const { id } = req.params
        const inventory = await Inventory.findByIdAndDelete(id);
        if(!inventory) {
            res.status(404).json({
                error: "Inventory not found",
            })
            return
        }

        res.status(200).json({message: "Inventory deleted successfully"})
    } catch (error) {
        res.status(500).json({
            error: "error in deleting inventory",
            details: (error as Error).message,
        })
    }
}

export default deleteInventroy;