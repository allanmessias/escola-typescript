import { MailTrapMailProvider } from './providers/implementations/MailTrapMailProvider';
import { PostGressStudentRepository } from './repositories/PostGressStudentRepository';
import { LoggerService } from './Services/LoggerService';
import { CreateStudentController } from './useCases/CreateStudent/CreateStudentController';
import { CreateStudentUseCase } from './useCases/CreateStudent/CreateStudentUseCase';

const mailProvider = new MailTrapMailProvider();
const postgressStudentRepository = new PostGressStudentRepository();
const logService = new LoggerService();

const createStundentUseCase = new CreateStudentUseCase(
	mailProvider,
	postgressStudentRepository,
	logService,
);

const createStudentController = new CreateStudentController(
	createStundentUseCase,
);

export { createStundentUseCase, createStudentController };
