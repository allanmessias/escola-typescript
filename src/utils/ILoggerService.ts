export interface ILoggerService {
	logInfo(message: string): Promise<string>;
	logError(message: string): Promise<string>;
	logWarn(message: string): Promise<string>;
	logDebug(message: string): Promise<string>;
}
