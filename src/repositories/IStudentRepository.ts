import { Student } from '../entities/Student';

export interface IStudentRepository {
	findByEmail(email: string): Promise<Student>;
	save(student: Student): Promise<void>;
}
