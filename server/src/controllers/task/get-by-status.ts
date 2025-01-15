import { Request, Response } from 'express';
import Task from '../../models/task.js';

export const getTaskByStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const status = req.params.status;
        
        // Fetch tasks with the given status
        const tasks = await Task.find({ status });

        if (!tasks || tasks.length === 0) {
            res.status(404).json({ message: 'No tasks found with the given status' });
            return;
        }

        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export default getTaskByStatus;
