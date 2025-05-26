export class Lexer {
    private readonly _expr: string;
    public constructor(expr: string) {
        this._expr = expr;
    }
    public scanAndLogTokens(): void {
        const tokens: string[] = this.getTokenizedArr();
        // flag to prevent the process from exiting with code 0
        let found_invalid_token = false;

        // create a mapped string identifying the tokens from the expression
        const tokenizedArr: string[] = tokens.map((token) => {
            if (token === "{") return "LEFT_BRACE { null";
            else if (token === "(") return "LEFT_PAREN ( null";
            else if (token === "}") return "RIGHT_BRACE } null";
            else if (token === ")") return "RIGHT_PAREN ) null";
            else if (token === ",") return "COMMA , null";
            else if (token === "+") return "PLUS + null";
            else if (token === "*") return "STAR * null";
            else if (token === "-") return "MINUS - null";
            else if (token === "/") return "SLASH / null";
            else if (token === ";") return "SEMICOLON ; null";
            else if (token === ".") return "DOT . null";
            else return `[line 1] Error: Unexpected character: ${token}`;
        });
        tokenizedArr.push("EOF  null");

        // log the tokens and decide on the exit code to be sent
        for (const token of tokenizedArr) {
            if(token.includes("Error")) found_invalid_token = true;
            console.log(token);
        }
        if (found_invalid_token)
            process.exit(65);
        process.exit(0);
    }
    private getTokenizedArr(): string[] {
        return this._expr.split("");
    }
}