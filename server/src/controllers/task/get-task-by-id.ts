import Task from '../../models/task.js';
import { Request, Response } from 'express';

export const getTaskById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            res.status(404).json({
                error: "Task not found",
            });
            return;
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({
            error: "Error in fetching task",
            details: (error as Error).message,
        });
    }
}

export default getTaskById;