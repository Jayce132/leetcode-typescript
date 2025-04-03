function plusOne(digits: number[]): number[] {
  // If [0] return [1] to reduce calculations
  if (digits.length === 1 && digits[0] === 0) {
    return [1];
  }

  // Use a copy so we do not change the original array reference
  // The copy has a 0 at the start as a padding
  const array = [0, ...digits];
  let currentPosition = array.length - 1;
  array[currentPosition] += 1;
  let currentDigit = array[currentPosition];
  let carry = 0;

  while (currentPosition >= 0) {
    currentDigit = array[currentPosition];
    currentDigit += carry;
    carry = Math.floor(currentDigit / 10);
    currentDigit %= 10;
    array[currentPosition] = currentDigit;
    currentPosition -= 1;
  }

  // If there is still a 0 padding at the start, we remove it
  if (array[0] === 0) {
    return array.slice(1);
  }
  return array;
}
