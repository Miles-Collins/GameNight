import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { triviaService } from "../Services/TriviaService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuestions() {
  let randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
  let randomQuestion = appState.questions[randomNumber];
  appState.activeQuestion = randomQuestion;
  console.log("Random", randomQuestion);
  setHTML("questions", randomQuestion.questionTemplate);
  // let template = "";
  // appState.questions.forEach();
  // setHTML("questions", template);
}
export class TriviaController {
  constructor() {
    this.getQuestions();
    // _drawQuestions();
    appState.on("questions", _drawQuestions);
  }

  async getQuestions() {
    try {
      await triviaService.getQuestions();
    } catch (error) {
      console.error(error);
      // @ts-ignore
      Pop.error("[Getting Question]", error.message);
    }
  }

  async correct(answer) {
    let question = appState.activeQuestion;
    console.log("Question", question);
    if (answer == question.answer) {
      Pop.success("You answered it correctly.");
      this.getQuestions();
    } else Pop.error("You answered the question wrong.");
  }
}
