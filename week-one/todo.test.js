import { calculator, getSumDivisible } from "./todo";

test("1번", () => {
  const presentDict = { 아이패드: 600000, 애플워치: 300000, 맥북: 1000000 };
  expect(calculator(presentDict)).toBe(1900000);
});

test("2번", () => {
  const divisor = 3;
  const numberList = [3, 2, 4, 7, 9, 10, 12, 40];
  expect(getSumDivisible(divisor, numberList)).toBe(24);
});
