import { TriviaController } from "./Controllers/TriviaController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  triviaController = new TriviaController();
}

window["app"] = new App();
