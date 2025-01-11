import express from 'express'
import createTask from '../controllers/task/create-task'
import getTask from '../controllers/task/get-task'
import getTaskById from '../controllers/task/get-task-by-id'
import updateTask from '../controllers/task/update-task'
import deleteTask from '../controllers/task/delete-task'

const router = express.Router()

router.get('/', [], getTask)

router.post('/', [], createTask)

router.get('/:id', [], getTaskById)

router.put('/:id', [], updateTask)

router.delete('/:id', [], deleteTask)

export default router