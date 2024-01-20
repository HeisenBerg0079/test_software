function arabicToNumeral(numeral) {
  const arabic = {'A': 1, 'B': 5, 'Z': 10, 'L': 50, 'C': 100, 'D': 500, 'R': 1000};

  let result = 0;
  let prevValue = 0;

  for (let i = numeral.length - 1; i >= 0; i--) {
      const symbol = numeral[i];
      const currentValue = arabic[symbol];

      if (currentValue < prevValue) {
          result -= currentValue;
      } else {
          result += currentValue;
      }

      prevValue = currentValue;
  }

  return result;
}

const inputArabic = "RCRZCAB";
const outputArabic = arabicToNumeral(inputArabic);
console.log(`Output: ${outputArabic}`);
