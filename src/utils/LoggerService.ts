import { ILoggerService } from './ILoggerService';
import { join } from 'path';
import { writeFile } from 'fs/promises';

export class LoggerService implements ILoggerService {
	logInfo(
		message: string,
		options: Record<string, any>,
	): string | Promise<any> {
		if (options.saveOnFile) {
			this.writeLog(message);
		}

		if (message) console.info(message);

		return message;
	}

	logError(message: string): Promise<string> | string {
		throw new Error('Method not implemented.');
	}

	logWarn(message: string): Promise<string> | string {
		throw new Error('Method not implemented.');
	}

	logDebug(message: string): Promise<string> | string {
		throw new Error('Method not implemented.');
	}

	async writeLog(message: string): Promise<any> {
		const file = await writeFile(join(__dirname, 'logs.log'), message, {
			flag: 'w',
		});
		return file;
	}
}
