import Task from '../../models/task.js';
import { Request, Response } from 'express';

export const acceptTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { username } = req.body;

        if (!username) {
            res.status(400).json({ error: "Username is required" });
            return;
        }

        const currentTask = await Task.findById(id);
        if (!currentTask) {
            res.status(404).json({ error: "Task not found" });
            return;
        }

        // Check if the user is already in the list
        if (currentTask.users.includes(username)) {
            res.status(400).json({ error: "User is already part of the task" });
            return;
        }

        // Add the username to the users array
        currentTask.users.push(username);

        // Save the updated task
        const updatedTask = await currentTask.save();

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({
            error: "Error in accepting task",
            details: (error as Error).message,
        });
    }
};

export default acceptTask;
