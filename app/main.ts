import fs from "fs";
import {Scanner} from "./tokenizer/scanner.ts";

const args: string[] = process.argv.slice(2); // Skip the first two arguments (node path and script path)

if (args.length < 2) {
  console.error("Usage: ./your_program.sh tokenize <filename>");
  process.exit(1);
}

const command: string = args[0];

if (command !== "tokenize") {
  console.error(`Usage: Unknown command: ${command}`);
  process.exit(1);
}

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.error("Logs from your program will appear here!");

const filename: string = args[1];


const fileContent: string = fs.readFileSync(filename, "utf8");

if (fileContent.length !== 0) {
  const scanner = new Scanner(fileContent);
  scanner.scanToGenerateTokens().forEach(token => {
    console.log(token.toString());
  });
  if (scanner.hasError) {
    process.exit(65); // Exit with code 65 if there was an error
  }
} else {
  console.log("EOF  null");
}
