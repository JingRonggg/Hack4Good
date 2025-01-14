import Task from '../../models/task.js';
import { Request, Response } from 'express';

export const createTask = async (req: Request, res: Response) => {
    try {
        const { task, description, points, status, users } = req.body;
        const newTask = new Task({ task, description, points, status, users });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({
            error: "Error in creating task",
        });
    }
}

export default createTask;