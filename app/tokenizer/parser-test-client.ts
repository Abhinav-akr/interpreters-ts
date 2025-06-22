import { Scanner } from "./scanner";
import { Parser } from "./parser";

function runParserTest(source: string) {
  const s = new Scanner(source);
  const p = new Parser(s.scanToGenerateTokens());
  p.parse();
}

runParserTest("true false");
