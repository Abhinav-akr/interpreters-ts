import { Scanner } from "./scanner";

function runScanner(input: string): void {
  const scanner = new Scanner(input);
  const tokens = scanner.scanToGenerateTokens();

  // convert tokens from arr[] to Array<Token>
  const tokenArray = Array.from(tokens);

  tokenArray.forEach((t) => {
    console.log(t.toString());
  });

  if (scanner.hasError) {
    process.exit(65); // Exit with code 65 if there was an error
  }
}

runScanner("2 + 3");
