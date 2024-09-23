import { obj } from "./toStrictEqual";

test("obj함수는 두 객체를 비교한다", () => {
  expect(obj()).toStrictEqual({ a: "hello" });
});

test("배열끼리도 toStrictEqual을 써야한다", () => {
  expect([1, 2, 3, 4]).toStrictEqual([1, 2, 3, 4]);
  expect([1, 2, 3, 4]).not.toBe([1, 2, 3, 4]);
});
