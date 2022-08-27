import { v4 as uuidv4 } from 'uuid';

export class Student {
	public readonly id!: string;

	public name!: string;
	public studentId!: number;
	public email!: string;
	public password!: string;

	constructor(props: Omit<Student, 'id'>, id?: string) {
		Object.assign(this, props);

		if (!id) this.id = uuidv4();
	}
}
