import { MailTrapMailProvider } from '../providers/implementations/MailTrapMailProvider';
import { PostGressStudentRepository } from '../repositories/PostGressStudentRepository';
import { CreateStudentController } from './CreateStudent/CreateStudentController';
import { CreateStudentUseCase } from './CreateStudent/CreateStudentUseCase';

const mailProvider = new MailTrapMailProvider();
const postgressStudentRepository = new PostGressStudentRepository();

const createStundentUseCase = new CreateStudentUseCase(
	mailProvider,
	postgressStudentRepository,
);

const createStudentController = new CreateStudentController(
	createStundentUseCase,
);

export { createStundentUseCase, createStudentController };
