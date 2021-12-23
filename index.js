const words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

function sorting(word) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < word.length; i += 1) {
      if (word[i - 1] > word[i]) {
        done = false;
        var tmp = word[i - 1];
        word[i - 1] = word[i];
        word[i] = tmp;
      }
    }
  }

  return word.join('');
}

function anagram(wordArray) {
  let groups = {};
  for ([index, word] of wordArray.entries()) {
    let w = sorting(word.split(''));
    groups[w] = !groups[w] ? [word] : groups[w].concat(word);
  }
	let result = [];
  for (const property in groups) {
    result.push(groups[property]);
  }
  return result;
}

console.log(anagram(words));
