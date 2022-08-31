export interface ILoggerService {
	logInfo(
		message: string,
		options: Record<string, any>,
	): Promise<string> | string;
	logError(message: string): Promise<string> | string;
	logWarn(message: string): Promise<string> | string;
	logDebug(message: string): Promise<string> | string;
}
