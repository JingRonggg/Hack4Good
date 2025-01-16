import express from 'express'
import getByName from '../controllers/account/getByName'
import getAllAccounts from '../controllers/account/getAllAccounts'

const router = express.Router()

router.get('/:username', [], getByName)
router.get('/', [], getAllAccounts)

export default router