import { shuffleArray } from './utils';

// // Set type for each question
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

// // In TypeScript, enums, Enums are useful when setting properties or values that can only be a certain number of possible values. Here I set the enums to allow me to set the difficulty 
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

// // I want to modify the state that I get back. Because we have the correct answer in a separte property and incorrect answer in a separate array. I want to have them in the same array, because I want to map this array and create answers in the UI in the jsx. So its easier to have both in 1 array. 
// // First grab the Question and add new property of answers of array of strings. This will use the types from Question and add the answer property to it.
export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
};