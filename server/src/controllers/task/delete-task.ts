import Task from '../../models/task.js';
import { Request, Response } from 'express';

const deleteTask = async (req: Request, res: Response) => {
    try{
        const { id } = req.params
        const task = await Task.findByIdAndDelete(id);
        if(!task) {
            res.status(404).json({
                error: "Task not found",
            })
            return
        }

        res.status(200).json({message: "Task deleted successfully"})
    } catch (error) {
        res.status(500).json({
            error: "Error in deleting task",
            details: (error as Error).message,
        })
    }
}

export default deleteTask;