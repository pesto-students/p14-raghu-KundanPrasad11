const calcWordFrequencies = () => {
  const userInput = prompt("Enter a sentence");
  const wordArr = userInput.split(/\s+/);
  const wordMap = new Map();
  for(const word of wordArr) {
    wordMap.set(word, wordMap.has(word) ? wordMap.get(word)+1 : 1);
  }
  for (const [word, count] of wordMap) {
    console.log(`${word} ${count}`);
  }
}