//
// export enum TokenType {
//     // Single-character tokens
//     LEFT_PAREN, RIGHT_PAREN, LEFT_BRACE, RIGHT_BRACE,
//     COMMA, DOT, MINUS, PLUS, SEMICOLON, SLASH, STAR,
//
//     // One or two character tokens
//     BANG, BANG_EQUAL,
//     EQUAL, EQUAL_EQUAL,
//     GREATER, GREATER_EQUAL,
//     LESS, LESS_EQUAL,
//
//     // Literals
//     IDENTIFIER, STRING, NUMBER,
//
//     // Keywords
//     AND, CLASS, ELSE, FALSE, FUN, FOR, IF, NIL, OR,
//     PRINT, RETURN, SUPER, THIS, TRUE, VAR, WHILE,
//
//     EOF
// }
//
// // Map token types to their string representation
// export const TokenTypeToString: Record<TokenType, string> = {
//     [TokenType.LEFT_PAREN]: "LEFT_PAREN",
//     [TokenType.RIGHT_PAREN]: "RIGHT_PAREN",
//     [TokenType.LEFT_BRACE]: "LEFT_BRACE",
//     [TokenType.RIGHT_BRACE]: "RIGHT_BRACE",
//     [TokenType.COMMA]: "COMMA",
//     [TokenType.DOT]: "DOT",
//     [TokenType.MINUS]: "MINUS",
//     [TokenType.PLUS]: "PLUS",
//     [TokenType.SEMICOLON]: "SEMICOLON",
//     [TokenType.SLASH]: "SLASH",
//     [TokenType.STAR]: "STAR",
//
//     [TokenType.BANG]: "BANG",
//     [TokenType.BANG_EQUAL]: "BANG_EQUAL",
//     [TokenType.EQUAL]: "EQUAL",
//     [TokenType.EQUAL_EQUAL]: "EQUAL_EQUAL",
//     [TokenType.GREATER]: "GREATER",
//     [TokenType.GREATER_EQUAL]: "GREATER_EQUAL",
//     [TokenType.LESS]: "LESS",
//     [TokenType.LESS_EQUAL]: "LESS_EQUAL",
//
//     [TokenType.IDENTIFIER]: "IDENTIFIER",
//     [TokenType.STRING]: "STRING",
//     [TokenType.NUMBER]: "NUMBER",
//
//     [TokenType.AND]: "AND",
//     [TokenType.CLASS]: "CLASS",
//     [TokenType.ELSE]: "ELSE",
//     [TokenType.FALSE]: "FALSE",
//     [TokenType.FUN]: "FUN",
//     [TokenType.FOR]: "FOR",
//     [TokenType.IF]: "IF",
//     [TokenType.NIL]: "NIL",
//     [TokenType.OR]: "OR",
//     [TokenType.PRINT]: "PRINT",
//     [TokenType.RETURN]: "RETURN",
//     [TokenType.SUPER]: "SUPER",
//     [TokenType.THIS]: "THIS",
//     [TokenType.TRUE]: "TRUE",
//     [TokenType.VAR]: "VAR",
//     [TokenType.WHILE]: "WHILE",
//
//     [TokenType.EOF]: "EOF"
// };
//
// // Map lexemes to token types (for single characters and keywords)
// export const tokenTypeToLexemeMap: Record<string, TokenType> = {
//     "(": TokenType.LEFT_PAREN,
//     ")": TokenType.RIGHT_PAREN,
//     "{": TokenType.LEFT_BRACE,
//     "}": TokenType.RIGHT_BRACE,
//     ",": TokenType.COMMA,
//     ".": TokenType.DOT,
//     "-": TokenType.MINUS,
//     "+": TokenType.PLUS,
//     ";": TokenType.SEMICOLON,
//     "/": TokenType.SLASH,
//     "*": TokenType.STAR,
//
//     "!": TokenType.BANG,
//     "!=": TokenType.BANG_EQUAL,
//     "=": TokenType.EQUAL,
//     "==": TokenType.EQUAL_EQUAL,
//     ">": TokenType.GREATER,
//     ">=": TokenType.GREATER_EQUAL,
//     "<": TokenType.LESS,
//     "<=": TokenType.LESS_EQUAL,
//
//     // Keywords
//     "and": TokenType.AND,
//     "class": TokenType.CLASS,
//     "else": TokenType.ELSE,
//     "false": TokenType.FALSE,
//     "fun": TokenType.FUN,
//     "for": TokenType.FOR,
//     "if": TokenType.IF,
//     "nil": TokenType.NIL,
//     "or": TokenType.OR,
//     "print": TokenType.PRINT,
//     "return": TokenType.RETURN,
//     "super": TokenType.SUPER,
//     "this": TokenType.THIS,
//     "true": TokenType.TRUE,
//     "var": TokenType.VAR,
//     "while": TokenType.WHILE
// };
//
// // Helper function to get lexeme for a token type (for debugging/printing)
// export function getLexemeForTokenType(type: TokenType): string | null {
//     for (const [lexeme, tokenType] of Object.entries(tokenTypeToLexemeMap)) {
//         if (tokenType === type) {
//             return lexeme;
//         }
//     }
//     return null;
// }
//
//
