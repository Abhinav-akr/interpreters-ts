import { Scanner } from "./scanner";
import { Parser } from "./parser";

function runParserTest(source: string) {
  const s = new Scanner(source);
  s.scanToGenerateTokens().forEach((t) => {
    console.log(t.toString());
  });
  const p = new Parser(s.scanToGenerateTokens());
  p.parse();
}

runParserTest("19");
