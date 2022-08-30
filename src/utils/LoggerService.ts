import { ILoggerService } from './ILoggerService';
import { join } from 'path';
import { writeFile } from 'fs/promises';

export class LoggerService implements ILoggerService {
	logInfo(message: string): Promise<string> {
		throw new Error('Method not implemented.');
	}

	logError(message: string): Promise<string> {
		throw new Error('Method not implemented.');
	}

	logWarn(message: string): Promise<string> {
		throw new Error('Method not implemented.');
	}

	logDebug(message: string): Promise<string> {
		throw new Error('Method not implemented.');
	}

	writeLog(message: string): Promise<void> {
		return writeFile(join(__dirname, 'logs.log'), message, {
			flag: 'w',
		});
	}
}
