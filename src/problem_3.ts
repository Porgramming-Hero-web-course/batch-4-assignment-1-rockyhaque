function countWordOccurrences(sentence: string, word: string): number {
  const lowerCaseSentence = sentence.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  const ArrayOfWords = lowerCaseSentence.split(/\W+/);

  let count = 0;
  for (let word of ArrayOfWords) {
    if (word === lowerCaseWord) {
      count++;
    }
  }
  return count;
}

// console.log(countWordOccurrences("TypeScript is great love. I love TypeScript!, love", "love"))
