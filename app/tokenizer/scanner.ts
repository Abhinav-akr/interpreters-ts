import {keywords, Token, type TokenType} from "../types/token.ts";
import {LoxErrorType} from "../types/loxErrorType.ts";

export class Scanner {

    private readonly source_str: string;
    private ArrayOfTokens: Token[] = [];

    private startIndex = 0;
    private current = 0;
    private lineNumber = 1;

    public hasError = false;

    constructor(source_str: string) {
        this.source_str = source_str;
    }

    public scanToGenerateTokens = (): Token[] => {
        while(!this.isAtEnd()) {
            // We are at the start of the next lexeme.
            this.startIndex = this.current;
            this.scanToken()
        }
        this.ArrayOfTokens.push(new Token("EOF", "", null, this.lineNumber));
        return this.ArrayOfTokens;
    }

    private isAtEnd = (): boolean => {
        return this.current >= this.source_str.length;
    }

    private addToken = (type: TokenType): void => {
        const lexeme = this.source_str.substring(this.startIndex, this.current);
        const token = new Token(type, lexeme, null, this.lineNumber);
        this.ArrayOfTokens.push(token);
    }

    private addTokenWithLiteral = (
        type: TokenType,
        literal: any
        ): void => {
            const lexeme = this.source_str.substring(this.startIndex, this.current);
            // handle when literal is a number - specifically an integer - conver to <number>.0 representation
            if (typeof literal === "number" && Number.isInteger(literal)) {
                literal = literal.toFixed(1); // Convert to string representation with one decimal place
            }
            const token = new Token(type, lexeme, literal, this.lineNumber);
            this.ArrayOfTokens.push(token);
        }

    private isMatch = (expectedChar: string): boolean => {
        if (this.isAtEnd() || this.source_str.charAt(this.current) !== expectedChar) {
            return false;
        }
        this.current++;
        return true;
    }

    private checkStringLiteral = (): void => {
        // current on the first char of string to be consumed
        while (!this.isAtEnd() && this.source_str.charAt(this.current) !== '"') {
            if (this.source_str.charAt(this.current) === '\n') {
                this.lineNumber++;
            }
            this.current++;
        }
        if (this.isAtEnd()) {
            this.hasError = true;
            const error = new LoxErrorType("Unterminated string.", this.lineNumber);
            error.logInLoxErrorFormat();
            return;
        }
        // We are at the closing quote
        this.current++; // Move past the closing quote
        const lexeme = this.source_str.substring(this.startIndex, this.current - 1); // Exclude the quotes
        this.addTokenWithLiteral("STRING", lexeme.replace('"', ''));
    }

    private isDigit = (char: string): boolean => {
        return char >= '0' && char <= '9';
    }

    private scanToken = (): void => {
        const char = this.source_str.charAt(this.current++);
        switch (char) {
            case '{': {
                this.addToken("LEFT_BRACE");
                break;
            }
            case '}': {
                this.addToken("RIGHT_BRACE");
                break;
            }
            case '(': {
                this.addToken("LEFT_PAREN");
                break;
            }
            case ')': {
                this.addToken("RIGHT_PAREN");
                break;
            }
            case ',': {
                this.addToken("COMMA");
                break;
            }
            case '+': {
                this.addToken("PLUS");
                break;
            }
            case '*': {
                this.addToken("STAR");
                break;
            }
            case '-': {
                this.addToken("MINUS");
                break;
            }
            case '/': {
                // Check for comments
                if( this.isMatch('/')) {
                    while(!this.isAtEnd() && this.source_str.charAt(this.current) !== '\n') {
                        this.current++;
                    }
                } else {
                    this.addToken("SLASH");
                }
                break;
            }
            case ';': {
                this.addToken("SEMICOLON");
                break;
            }
            case '.': {
                this.addToken("DOT");
                break;
            }
            case '=': {
                this.addToken(this.isMatch('=') ? "EQUAL_EQUAL" : "EQUAL");
                break;
            }
            case '!': {
                this.addToken(this.isMatch('=') ? "BANG_EQUAL" : "BANG");
                break;
            }
            case '<': {
                this.addToken(this.isMatch('=') ? "LESS_EQUAL" : "LESS");
                break;
            }
            case '>': {
                this.addToken(this.isMatch('=') ? "GREATER_EQUAL" : "GREATER");
                break;
            }
            case '"': {
                // Handle string literals
                this.checkStringLiteral();
                break;
            }
            case ' ':
            case '\r':
            case '\t': {
                break;
            }
            case '\n': {
                this.lineNumber++;
                break;
            }
            default:
                if (this.isDigit(char)) {
                    // found a digit - possibility for a number literal
                    while (!this.isAtEnd() && this.isDigit(this.source_str.charAt(this.current))) {
                        this.current++;
                    }
                    // Check for a fractional part
                    if (!this.isAtEnd() && this.source_str.charAt(this.current) === '.' && this.isDigit(this.source_str.charAt(this.current + 1))) {
                        this.current++; // Consume the '.'
                        while (!this.isAtEnd() && this.isDigit(this.source_str.charAt(this.current))) {
                            this.current++;
                        }
                    }
                    // Convert the substring to a number
                    const numberStr = this.source_str.substring(this.startIndex, this.current);
                    const numberLiteral = parseFloat(numberStr);
                    this.addTokenWithLiteral("NUMBER", numberLiteral);
                } else if (this.isAlpha(char)) {
                    // found an identifier or keyword
                    this.checkForIdentifier();
                }
                else {
                    this.hasError = true;
                    const lexeme = this.source_str.substring(this.startIndex, this.current);
                    const error = new LoxErrorType(`Unexpected character: ${lexeme}`, this.lineNumber);
                    error.logInLoxErrorFormat();
                }
                break;
        }
    }

    private isAlphaNumeric = (char: string): boolean => {
        return this.isAlpha(char) || this.isDigit(char);
    }

    private checkForIdentifier() {
        while (!this.isAtEnd() && this.isAlphaNumeric(this.source_str.charAt(this.current))) {
            this.current++;
        }
        const lexeme = this.source_str.substring(this.startIndex, this.current);
        // Check for keywords
        const tokenType = keywords[lexeme] || "IDENTIFIER";
        if (tokenType !== "IDENTIFIER") {
            this.addToken(tokenType);
            return;
        }
        this.addToken("IDENTIFIER");
    }

    private isAlpha(char: string) {
        return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === '_';
    }
}