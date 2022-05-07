// This file will have a function to be used to randomize the answers to the questions. 
// export a shuffleArray function that takes array type any array as parameter explicitly return array spread array and sort with Math.random - 0.5
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
