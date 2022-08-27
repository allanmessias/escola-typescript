import { Student } from '../entities/Student';
import { IStudentRepository } from './IStudentRepository';

export class PostGressStudentRepository implements IStudentRepository {
	private student: Student[] = [];

	async findByEmail(email: string): Promise<Student> {
		const student = await this.student.find((user) => user.email === email);

		return student;
	}

	async save(student: Student): Promise<void> {
		this.student.push(student);
	}
}
