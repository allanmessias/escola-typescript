import { ILoggerService, LogLevel, Message } from './ILoggerService';

export class LoggerService implements ILoggerService {
	createLog(level: LogLevel, message: Message): void {
		console[level](message.toUpperCase());
	}
}
