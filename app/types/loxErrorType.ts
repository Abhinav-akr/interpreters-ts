export class LoxErrorType {
    private readonly message: string;
    private readonly lineNumber: number;

    constructor(message: string, lineNumber: number) {
        this.message = message;
        this.lineNumber = lineNumber;
    }

    public logInLoxErrorFormat = (): void => {
        console.error(`[line ${this.lineNumber}] Error: ${this.message}`);
    }
}