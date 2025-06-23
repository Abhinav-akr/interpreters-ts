import { Token, type TokenType } from "../types/token";
import { TokenTypeEnum } from "../types/token";
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
      if (
        token.type === TokenTypeEnum.NUMBER ||
        token.type === TokenTypeEnum.STRING
      ) {
        console.log(token.literal);
      } else {
        console.log(token.lexeme);
      }
    });
  };
}
