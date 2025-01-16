import { Request, Response } from 'express';
import Account from '../../models/Account.js';

export const updateAccount = async (req: Request, res: Response) => {
    try {
        const { username } = req.params;
        const { password, role, points } = req.body;

        const updateFields: any = {};
        if (password !== undefined) updateFields.password = password;
        if (role !== undefined) updateFields.role = role;
        if (points !== undefined) updateFields.points = points;

        const account = await Account.findOneAndUpdate(
            { username },
            updateFields,
            { new: true, runValidators: true }
        );

        if (!account) {
            res.status(404).json({
                error: "Account not found",
            });
            return;
        }

        res.status(200).json(account);
    } catch (error) {
        res.status(500).json({
            error: "Error in updating account",
            details: (error as Error).message,
        });
    }
};

export default updateAccount;