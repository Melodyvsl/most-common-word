const fs = require('fs');

function getMostCommonWord(textFile) {
  let txt = fs.readFileSync(textFile, 'utf8');

  let allWords = txt.split(/\b/); //['line1', 'line2']
  let wordCountList = {};

  allWords.forEach(function(word) {
    if (word !== ' ') {
      if (!wordCountList.hasOwnProperty(word)) {
        wordCountList[word] = { word: word, count: 0 };
      }
      wordCountList[word].count++;
    }
  });

  let maxCountWord = { count: 0 };
  for (let propName in wordCountList) {
    let currentWord = wordCountList[propName];
    if (maxCountWord.count < currentWord.count) {
      maxCountWord = currentWord;
    }
  }
  console.log(maxCountWord);
  return maxCountWord;
}

module.exports = getMostCommonWord;
