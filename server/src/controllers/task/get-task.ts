import Task from '../../models/task.js';
import { Request, Response } from 'express';

export const getTask = async (_req: Request, res: Response) => {
    try {
        const task = await Task.find();
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({
            error: "Error in fetching task",
            details: (error as Error).message,
        });
    }
}

export default getTask;
