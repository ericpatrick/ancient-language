import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

import { translateToAncientUseCase } from "./useCases/translateToAncient/index";

const rl = readline.createInterface({ input, output });

rl.question("What's the english text: ", (answer: string) => {
  const ancient = translateToAncientUseCase.execute(answer);

  console.log(ancient);

  rl.close();
});
