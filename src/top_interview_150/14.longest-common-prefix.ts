function longestCommonPrefix(strs: string[]): string {
  const firstWord = strs[0];
  const wordListLength = strs.length;
  let currentWordIndex = 1;
  let currentCharIndex = 0;
  let lastIndex = 0;
  let isCommonChar = true;

  if (firstWord === "") {
    return "";
  }

  while (true) {
    if (currentWordIndex < wordListLength && currentCharIndex <= firstWord.length) {
      if (strs[currentWordIndex][currentCharIndex] === firstWord[currentCharIndex]) {
        isCommonChar = true;
      } else {
        isCommonChar = false;
        break;
      }

      currentWordIndex += 1;
    } else {
      if (currentCharIndex >= firstWord.length) {
        break;
      }
      if (isCommonChar) {
        lastIndex += 1;
      }
      currentWordIndex = 1;
      currentCharIndex += 1;
    }
  }

  return firstWord.slice(0, lastIndex);
};
