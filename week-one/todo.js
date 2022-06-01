//1번
export const calculator = (presentDict) => {
  /**todo */
  const prices = Object.values(presentDict);
  return prices.reduce((prev, curr) => prev + curr);
};

export const getSumDivisible = (divisor, numberList) => {
  /**todo */
  const result = numberList
    .filter((num) => num % divisor === 0)
    .reduce((prev, curr) => prev + curr);
  return result;
};
