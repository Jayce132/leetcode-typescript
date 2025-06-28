// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function romanToInt(s: string): number {
  const input = s;

  const roman: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const split: number[] = [];
  let current: number = roman[input[0]];
  let next: number = roman[input[1]];

  if (input.length > 1) {
    for (let i = 0; i < input.length - 1; i++) {
      current = roman[input[i]];
      next = roman[input[i + 1]];

      if (current >= next) {
        split.push(current);

        if (i === input.length - 2) {
          split.push(next);
        }
      } else if (current < next) {
        split.push(next - current);

        if (i === input.length - 3) {
          split.push(roman[input[input.length - 1]]);
        }

        i++;
      }
    }

    return split.reduce((x, y) => x + y);
  }
  return roman[input[0]];
};
