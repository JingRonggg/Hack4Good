import { Request, Response } from 'express';
import Task from '../../models/task.js';

export const getTaskByUsername = async (req: Request, res: Response): Promise<void> => {
    try {
        const username = req.params.username;
        const task = await Task.find({ users: username });

        if (!task) {
            res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export default getTaskByUsername;