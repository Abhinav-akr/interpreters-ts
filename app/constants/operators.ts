export const OPERATORS = {
    LEFT_PAREN: "LEFT_PAREN",
    RIGHT_BRACE: "RIGHT_BRACE",
    LEFT_BRACE: "LEFT_BRACE",
    RIGHT_PAREN: "RIGHT_PAREN",
    COMMA: "COMMA",
    PLUS: "PLUS",
    STAR: "STAR",
    MINUS: "MINUS",
    SLASH: "SLASH",
    SEMICOLON: "SEMICOLON",
    DOT: "DOT"
}

export const OPERATOR_MAP = {
    "(": OPERATORS.LEFT_PAREN,
    ")": OPERATORS.RIGHT_PAREN,
    "{": OPERATORS.LEFT_BRACE,
    "}": OPERATORS.RIGHT_BRACE,
    ",": OPERATORS.COMMA,
    "+": OPERATORS.PLUS,
    "*": OPERATORS.STAR,
    "-": OPERATORS.MINUS,
    "/": OPERATORS.SLASH,
    ";": OPERATORS.SEMICOLON,
    ".": OPERATORS.DOT
}