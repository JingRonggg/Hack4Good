import express from 'express'
import createInventory from '../controllers/inventory/create-inventory'
import deleteInventory from '../controllers/inventory/delete-inventory'
import getInventory from '../controllers/inventory/get-inventory'
import getInventoryById from '../controllers/inventory/get-inventory-by-id'
import updateInventory from '../controllers/inventory/update-inventory'

const router = express.Router()

router.get('/', [], getInventory)

router.post('/', [], createInventory)

router.get('/:id', [], getInventoryById)

router.put('/:id', [], updateInventory)

router.delete('/:id', [], deleteInventory)

export default router