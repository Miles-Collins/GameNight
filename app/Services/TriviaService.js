import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";

class TriviaService {
  async getQuestions() {
    let res = await axios.get("https://opentdb.com/api.php?amount=10");
    console.log("Questions Data:", res.data);
    appState.questions = res.data.results.map(
      (questionData) => new Question(questionData)
    );
    console.log("Questions Array:", appState.questions);
    appState.questions = appState.questions;
  }
}

export const triviaService = new TriviaService();
