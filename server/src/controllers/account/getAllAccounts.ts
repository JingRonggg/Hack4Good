import { type RequestHandler } from 'express'
import Account from '../../models/Account'

const getAllAccounts: RequestHandler = async (req, res, next) => {
  try {
    const accounts = await Account.find().select('-password')
    res.status(200).json({
      data: accounts
    })
  } catch (error) {
    next(error)
  }
}

export default getAllAccounts