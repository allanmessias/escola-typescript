import { Request, Response } from 'express';
import { CreateStudentUseCase } from './CreateStudentUseCase';

export class CreateStudentController {
	constructor(private createStundentUseCase: CreateStudentUseCase) {}

	async handle(req: Request, res: Response): Promise<Response> {
		const { name, email, password, studentId } = req.body;

		try {
			await this.createStundentUseCase.execute({
				name,
				email,
				password,
				studentId,
			});
			return res.status(201).send();
		} catch (error: any) {
			return res.status(400).json({
				message: error.message || 'unexpected error',
			});
		}
	}
}
