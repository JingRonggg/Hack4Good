import Task from '../../models/task.js';
import { Request, Response } from 'express';

export const completeTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const currentTask = await Task.findById(id);
        if (!currentTask) {
            res.status(404).json({
                error: "Task not found",
            });
            return;
        }

        if (currentTask.status === 'completed') {
            res.status(400).json({
                error: "Task is already completed and cannot be updated to pendingVerification."
            });
            return;
        }

        const updateFields = {
            status: 'pendingVerification',
            markedCompleted: new Date(),
        };

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            updateFields,
            { new: true, runValidators: true }
        );

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({
            error: "Error in completing task",
            details: (error as Error).message,
        });
    }
};

export default completeTask;
