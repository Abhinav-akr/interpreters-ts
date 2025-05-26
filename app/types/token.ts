import type {TokenType} from "./tokenType.ts";

export class Token {
    readonly type: TokenType;
    readonly lexeme: string;
    readonly literal: Object;
    readonly value: string;
    constructor(type: TokenType, lexeme: string, literal: Object, value: string) {
        this.type = type;
        this.value = value;
        this.lexeme = lexeme;
        this.literal = literal;
    }

    toString(): string {
        return `${this.type} ${this.lexeme} ${this.literal}`;
    }
}
/*
* expression - const result = 45 + capital * 2
* [const , result, =, 45, +, capital, *, 2]
* type: [KEYWORD, IDENTIFIER, OPERATOR, INTEGER, OPERATOR, IDENTIFIER, OPERATOR, INTEGER]
* value: [const, result, =, 45, +, capital, *, 2]
*
* */