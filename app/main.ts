import fs from "fs";
//import {scanAndLogBraces} from "./tokenizer/token-scanner";

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
  const tokens: string[] = fileContent.split("");
  // scan and log out parantheses
  // scanAndLogParantheses(tokens);
  // scan and log out braces
  //scanAndLogBraces(tokens);
  const tokenizedArr: string[] = tokens.map((token , index) => {
    if (token === "{") return "LEFT_BRACE { null";
    else if (token === "(") return "LEFT_PAREN ( null";
    else if (token === "}") return "RIGHT_BRACE } null";
    else if (token === ")") return "RIGHT_PAREN ) null";
    else if (token === ",") return "COMMA , null";
    else if (token === "+") return "PLUS + null";
    else if (token === "*") return "STAR * null";
    else if (token === "-") return "MINUS - null";
    else if (token === "/") return "SLASH / null";
    else if (token === ";") return "SEMICOLON ; null";
    else if (token === ".") return "DOT . null";
    else return `UNKNOWN-${index}`
  });
  tokenizedArr.push("EOF  null");

  for (const token of tokenizedArr) {
    if (token.startsWith("UNKNOWN")) {
        const index = token.split("-")[1];
        console.error(`[line 1] Error: Unexpected character: ${index}`);
    }
    else {
      console.log(token);
    }
  }

} else {
  console.log("EOF  null");
}
