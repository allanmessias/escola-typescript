export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export type Message = string;

export interface ILoggerService {
	createLog(level: LogLevel, message: Message): void;
}
