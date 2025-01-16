import express from 'express'
import createTask from '../controllers/task/create-task'
import getTask from '../controllers/task/get-task'
import getTaskById from '../controllers/task/get-task-by-id'
import updateTask from '../controllers/task/update-task'
import deleteTask from '../controllers/task/delete-task'
import getTaskByUsername from '../controllers/task/get-by-username'
import getTaskByStatus from '../controllers/task/get-by-status'
import acceptTask from '../controllers/task/accept-task'
import quitTask from '../controllers/task/quit-task'
import completeTask from '../controllers/task/complete-task'

const router = express.Router()

router.get('/', [], getTask)

router.post('/', [], createTask)

router.get('/:id', [], getTaskById)

router.put('/:id', [], updateTask)

router.delete('/:id', [], deleteTask)

router.get('/username/:username', [], getTaskByUsername)

router.get('/status/:status', [], getTaskByStatus)

router.put('/accept/:id', [], acceptTask)

router.put('/quit/:id', [], quitTask)

router.put('/complete/:id', [], completeTask)

export default router