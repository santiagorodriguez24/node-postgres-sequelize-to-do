import { Router } from 'express';
import { getProjects, createProject, getProjectById, deleteProjectById, updateProjectById } from '../controllers/projectsController';
const router = Router();

router.get('/', getProjects);
router.post('/', createProject);
router.get('/:id', getProjectById);
router.delete('/:id', deleteProjectById);
router.put('/:id', updateProjectById);

export default router;