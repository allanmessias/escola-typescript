import { Router } from 'express';
import { createStudentController } from './useCases';

const router = Router();

router.post('/students', (req, res) => {
	return createStudentController.handle(req, res);
});

export { router };
