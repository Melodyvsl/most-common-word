const fs = require('fs');

function getMostCommonWord(textFile) {
  let txt = fs.readFileSync(textFile, 'utf8');

  var allWords = txt.split(/\b/);
  var wordCountList = {};

  allWords.forEach(function(word) {
    if (word !== ' ') {
      if (!wordCountList.hasOwnProperty(word)) {
        wordCountList[word] = { word: word, count: 0 };
      }
      wordCountList[word].count++;
    }
  });

  var maxCountWord = { count: 0 };
  for (var propName in wordCountList) {
    var currentWord = wordCountList[propName];
    if (maxCountWord.count < currentWord.count) {
      maxCountWord = currentWord;
    }
  }
  console.log(maxCountWord);
  return `foo${maxCountWord.word}bar`;
}

module.exports = getMostCommonWord;
