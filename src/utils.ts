// This file will have a function to be used to randomize the answers to the questions
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);