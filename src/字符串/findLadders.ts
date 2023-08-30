// 链接：https://leetcode.cn/problems/word-transformer-lcci
// 给定字典中的两个词，长度相等。写一个方法，把一个词转换成另一个词， 但是一次只能改变一个字符。
// 每一步得到的新词都必须能在字典中找到。
// 编写一个程序，返回一个可能的转换序列。如有多个可能的转换序列，你可以返回任何一个。

export default function findLadders(
  beginWord: string,
  endWord: string,
  wordList: string[]
) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return [];
  const len = beginWord.length;
  const availableLettersSet: Set<string>[] = Array(len).fill(undefined).map(() => new Set);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < wordList.length; j++) {
      availableLettersSet[i].add(wordList[j][i]);
    }
  }
  function helper(word: string, arr: string[], set: Set<string> = new Set) {
    if (set.has(word)) return;
    set.add(word);
    for (let i = 0; i < len; i++) {
      const c = word[i], letters = [...availableLettersSet[i]];
      for (let j = 0; j < letters.length; j++) {
        if (c === letters[j]) continue;
        const _word = word.substring(0, i) + letters[j] + word.substring(i + 1);
        if (set.has(_word)) continue;
        if (wordSet.has(_word)) {
          const _arr = [...arr, _word];
          if (_word === endWord) return _arr;
          const r = helper(_word, _arr, set);
          if (r) return r;
        }
      }
    }
  }
  return helper(beginWord, [beginWord]) || [];
}

// 回溯
// export default function findLadders(
//   beginWord: string,
//   endWord: string,
//   wordList: string[]
// ): string[] {
//   const wordSet = new Set(wordList);
//   if (!wordSet.has(endWord)) return [];
//   const len = beginWord.length;
//   const availableLettersSet: Set<string>[] = Array(len)
//     .fill(undefined)
//     .map(() => new Set());
//   const availableLetters: string[][] = Array(len)
//     .fill(undefined)
//     .map(() => []);
//   for (let i = 0; i < wordList.length; i++) {
//     for (let j = 0; j < len; j++) {
//       if (!availableLettersSet[j].has(wordList[i][j])) {
//         availableLettersSet[j].add(wordList[i][j]);
//         availableLetters[j].push(wordList[i][j]);
//       }
//     }
//   }
//   function helper(
//     word: string,
//     arr: string[],
//     wordLetterIndex = 0,
//     availableLetterIndex = 0
//   ) {
//     for (let i = 0; i < len; i++) {
//       let _word: string,
//         _availableLetterIndex = 0;
//       if (i === wordLetterIndex) {
//         _availableLetterIndex = availableLetterIndex;
//       }
//       while (word[i] === availableLetters[i][_availableLetterIndex]) {
//         _availableLetterIndex++;
//       }
//       if (!availableLetters[i][_availableLetterIndex]) continue;
//       _word =
//         word.substring(0, i) +
//         availableLetters[i][_availableLetterIndex] +
//         word.substring(i + 1);
//       let r: any;
//       if (wordSet.has(_word)) {
//         arr = [...arr, _word];
//         if (_word === endWord) return arr;
//         r = helper(_word, arr, i, _availableLetterIndex + 1);
//         if (r) return r;
//       }
//       r = helper(word, [...arr], i, _availableLetterIndex + 1);
//       if (r) return r;
//     }
//   }
//   return helper(beginWord, [beginWord]) || [];
// }
