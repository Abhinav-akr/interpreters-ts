export const scanAndLogParantheses = (tokens: string[]) => {
    const tokenizedArr: string[] = tokens.map((token) => {
        if (token === "(") return "LEFT_PAREN ( null";
        else if (token === ")") return "RIGHT_PAREN ) null";
        else return "UNKNOWN"
    });
    tokenizedArr.push("EOF  null");

    for (const token of tokenizedArr) {
        console.log(token);
    }
}

export const scanAndLogBraces = (tokens: string[]): void => {
    const tokenizedArr: string[] = tokens.map((token) => {
        if (token === "{") return "LEFT_BRACE { null";
        else if (token === "}") return "RIGHT_BRACE } null";
        else return "UNKNOWN"
    });
    tokenizedArr.push("EOF  null");

    for (const token of tokenizedArr) {
        console.log(token);
    }
}