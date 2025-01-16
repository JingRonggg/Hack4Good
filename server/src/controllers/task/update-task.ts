import Task from '../../models/task.js';
import { Request, Response } from 'express';

export const updateTask = async (req: Request ,res: Response) => {
    try{
        const { id } = req.params;
        const { task, description, points, status } = req.body;
        const taskFound = await Task.findByIdAndUpdate(
            id,
            { task, description, points, status },
            { new: true, runValidators: true }
        )

        if (!taskFound) {
            res.status(404).json({
                error: "Task not found",
            })
            return
        }

        res.status(200).json(taskFound)

    } catch (error) {
        res.status(500).json({
            error:"Error in updating task",
            details:(error as Error).message,
        })
    }
}

export default updateTask;