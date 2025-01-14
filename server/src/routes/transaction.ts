import express from 'express'
import createTransaction from '../controllers/transaction/create-transaction'
import deleteTransaction from '../controllers/transaction/delete-transaction'
import getTransaction from '../controllers/transaction/get-transaction'
import updateTransaction from '../controllers/transaction/update-transaction'
import getTransactionById from '../controllers/transaction/get-transaction-by-id'
import getTransactionByName from '../controllers/transaction/get-transaction-by-name'
import approveTransaction from '../controllers/transaction/approve-transaction'

const router = express.Router()

router.get('/', [], getTransaction)

router.post('/', [], createTransaction)

router.get('/:id', [], getTransactionById)

router.put('/:id', [], updateTransaction)

router.delete('/:id', [], deleteTransaction)

router.get('/username/:username', [], getTransactionByName)

router.post('/approve/:id', [], approveTransaction)

export default router
