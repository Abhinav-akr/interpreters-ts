
export const TokenTypeEnum = {
    LEFT_PAREN: "LEFT_PAREN",
    RIGHT_PAREN: "RIGHT_PAREN",
    LEFT_BRACE: "LEFT_BRACE",
    RIGHT_BRACE: "RIGHT_BRACE",
    COMMA: "COMMA",
    DOT: "DOT",
    MINUS: "MINUS",
    PLUS: "PLUS",
    SEMICOLON: "SEMICOLON",
    SLASH: "SLASH",
    STAR: "STAR",
    EQUAL: "EQUAL",
    EQUAL_EQUAL: "EQUAL_EQUAL",
    BANG: "BANG",
    BANG_EQUAL: "BANG_EQUAL",
    GREATER: "GREATER",
    GREATER_EQUAL: "GREATER_EQUAL",
    LESS: "LESS",
    LESS_EQUAL: "LESS_EQUAL",
    STRING: "STRING",
    NUMBER: "NUMBER",
    IDENTIFIER: "IDENTIFIER",
    AND: "AND",
    CLASS: "CLASS",
    ELSE: "ELSE",
    FALSE: "FALSE",
    FUN: "FUN",
    FOR: "FOR",
    IF: "IF",
    NIL: "NIL",
    OR: "OR",
    PRINT: "PRINT",
    RETURN: "RETURN",
    SUPER: "SUPER",
    THIS: "THIS",
    TRUE: "TRUE",
    VAR: "VAR",
    WHILE: "WHILE",
    EOF: "EOF"
} as const;

export const keywords: Record<string, TokenType> = {
    "and": TokenTypeEnum.AND,
    "class": TokenTypeEnum.CLASS,
    "else": TokenTypeEnum.ELSE,
    "false": TokenTypeEnum.FALSE,
    "fun": TokenTypeEnum.FUN,
    "for": TokenTypeEnum.FOR,
    "if": TokenTypeEnum.IF,
    "nil": TokenTypeEnum.NIL,
    "or": TokenTypeEnum.OR,
    "print": TokenTypeEnum.PRINT,
    "return": TokenTypeEnum.RETURN,
    "super": TokenTypeEnum.SUPER,
    "this": TokenTypeEnum.THIS,
    "true": TokenTypeEnum.TRUE,
    "var": TokenTypeEnum.VAR,
    "while": TokenTypeEnum.WHILE
};

export type TokenType = (typeof TokenTypeEnum)[keyof typeof TokenTypeEnum];

export class Token {
    readonly type: TokenType;
    readonly lexeme: string | number;
    readonly literal: any | null;
    readonly lineNumber: Number;

    constructor(type: TokenType, lexeme: string | number, literal: any | null, lineNumber: Number) {
        this.type = type;
        this.lineNumber = lineNumber;
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