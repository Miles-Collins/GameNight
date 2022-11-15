import { appState } from "../AppState.js";

export class Question {
  constructor(data) {
    this.category = data.category;
    this.answer = data.correct_answer;
    this.wrong = data.incorrect_answers;
    this.question = data.question;
    this.type = data.type;
    this.answers = [];
  }

  get questionTemplate() {
    this.wrong.push(this.answer);
    this.wrong.sort((a, b) => 0.5 - Math.random());
    console.log(this.answers, "Answers");
    if (this.type != "boolean") {
      return /*html*/ `
    <div class="col-10 mx-3 my-5 rounded">
          <div class="row">
            <div class="col-12 bg-dark text-light text-center questionHeight d-flex align-items-center justify-content-center">
              <h1 class=" ">${this.question}</h1>
            </div>
            <button onclick="app.triviaController.correct('${this.wrong[0]}')" class="col-6 answersHeight d-flex align-items-center justify-content-center">A: ${this.wrong[0]}</button>
            <button onclick="app.triviaController.correct('${this.wrong[2]}')" class="col-6 answersHeight d-flex align-items-center justify-content-center">B: ${this.wrong[2]}</button>
            <button onclick="app.triviaController.correct('${this.wrong[1]}')" class="col-6 answersHeight d-flex align-items-center justify-content-center">C: ${this.wrong[1]}</button>
            <button onclick="app.triviaController.correct('${this.wrong[3]}')" class="col-6 answersHeight d-flex align-items-center justify-content-center">D: ${this.wrong[3]}</button>
          </div>
        </div>
  `;
    } else {
      return /*html*/ `
      <div class="col-8 mx-3 my-5 rounded">
            <div class="row rounded">
              <div class="col-12 bg-dark text-light text-center">
                <h1>${this.question}</h1>
              </div>
              <button onclick="app.triviaController.correct('${this.wrong[0]}')" class="col-6 answersHeight d-flex align-items-center justify-content-center">A: ${this.wrong[0]}</button>
              <button onclick="app.triviaController.correct('${this.wrong[1]}')" class="col-6 answersHeight d-flex align-items-center justify-content-center">C: ${this.wrong[1]}</button> 
            </div>
          </div>
    `;
    }
  }
}
