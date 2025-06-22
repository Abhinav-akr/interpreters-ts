import { Token } from "../types/token";
export class Parser {
  private tokens: Array<Token>;
  private current: number;

  constructor(tokens: Array<Token>) {
    this.tokens = tokens;
    this.current = 0;
  }

  public parse = (): void => {
    this.tokens.forEach((token) => {
      // console.log(
      //   `Type: ${token.type}, Lexeme: ${token.lexeme}, Literal: ${token.literal}`,
      // );
      console.log(token.lexeme)
    });
  };
}
