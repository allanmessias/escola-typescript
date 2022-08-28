import { Student } from '../../entities/Student';
import { IMailProvider } from '../../providers/IMailProvider';
import { IStudentRepository } from '../../repositories/IStudentRepository';
import { ILoggerService } from '../../Services/ILoggerService';
import { ICreateStudentRequestDTO } from './CreateStudentDTO';

export class CreateStudentUseCase {
	constructor(
		private mailProvider: IMailProvider,
		private studentRepository: IStudentRepository,
		private logService: ILoggerService,
	) {}

	async execute(data: ICreateStudentRequestDTO) {
		const studentAlreadyExists = await this.studentRepository.findByEmail(
			data.email,
		);

		if (studentAlreadyExists) throw new Error('User already exists');

		const student = new Student(data);

		await this.logService.createLog(
			'info',
			'Creating Student and Sending E-mail',
		);
		await this.studentRepository.save(student);
		await this.sendMail(student);
	}

	async sendMail(data: ICreateStudentRequestDTO) {
		return await this.mailProvider.sendMail({
			to: {
				name: data.name,
				email: data.email,
			},
			from: {
				name: 'Equipe da escola teste',
				email: 'escola@equipe.com.br',
			},
			subject: 'Teste',
			body: 'Testando',
		});
	}
}
