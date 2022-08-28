import { Router } from 'express';
import { createStudentController } from '.';

const router = Router();

router.post('/students', (req, res) => {
	return createStudentController.handle(req, res);
});

export { router };
