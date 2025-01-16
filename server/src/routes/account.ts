import express from 'express'
import getByName from '../controllers/account/getByName'
import getAllAccounts from '../controllers/account/getAllAccounts'
import deleteAccount from '../controllers/account/deleteAccount'
import updateAccount from '../controllers/account/updateAccount'

const router = express.Router()

router.get('/:username', [], getByName)
router.get('/', [], getAllAccounts)
router.delete('/:username', [], deleteAccount)
router.put('/:username', [], updateAccount)

export default router