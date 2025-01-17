import Task from '../../models/task.js';
import { Request, Response } from 'express';

export const quitTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { username } = req.body;

        if (!username) {
            res.status(400).json({
                error: "Username is required",
            });
            return;
        }

        const currentTask = await Task.findById(id);
        if (!currentTask) {
            res.status(404).json({
                error: "Task not found",
            });
            return;
        }

        if (!currentTask.users.includes(username)) {
            res.status(400).json({
                error: "User not assigned to this task",
            });
            return;
        }

        const updatedUsers = currentTask.users.filter((user: string) => user !== username);

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { users: updatedUsers },
            { new: true, runValidators: true }
        );

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({
            error: "Error in quitting task",
            details: (error as Error).message,
        });
    }
};

export default quitTask;
