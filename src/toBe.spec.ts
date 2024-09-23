import { sum } from "./toBe";

test("sum함수는 두 숫자를 더한다", () => {
  expect(sum(1, 2)).toBe(3); // 3 이다
  expect(sum(1, 2)).not.toBe(2); // 3이 아니다
});
