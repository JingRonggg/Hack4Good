import Task from '../../models/task.js';
import { Request, Response } from 'express';

export const updateTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { task, description, points, users, status } = req.body;

        const updateFields: any = {};
        if (task !== undefined) updateFields.task = task;
        if (description !== undefined) updateFields.description = description;
        if (points !== undefined) updateFields.points = points;
        if (users !== undefined) updateFields.users = users;
        if (status !== undefined) updateFields.status = status;

        const currentTask = await Task.findById(id);
        if (!currentTask) {
            res.status(404).json({
                error: "Task not found",
            });
            return;
        }

        if (status === 'pendingVerification' && currentTask.status !== 'pendingVerification') {
            updateFields.markedCompleted = new Date();
        } else if (status === 'completed' && currentTask.status !== 'completed') {
            updateFields.verified = new Date();
        }

        const taskFound = await Task.findByIdAndUpdate(
            id,
            updateFields,
            { new: true, runValidators: true }
        );

        res.status(200).json(taskFound);
    } catch (error) {
        res.status(500).json({
            error: "Error in updating task",
            details: (error as Error).message,
        });
    }
};

export default updateTask;