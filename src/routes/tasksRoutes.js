import { Router } from 'express';
import { getTasks, getTasksByProject, createTask, getTaskById, deleteTaskById, updateTaskById } from '../controllers/tasksController';
const router = Router();

router.get('/', getTasks);
router.post('/', createTask);
router.get('/:id', getTaskById);
router.delete('/:id', deleteTaskById);
router.put('/:id', updateTaskById);
router.get('/project/:projectid', getTasksByProject);

export default router;