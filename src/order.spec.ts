import { first, second, third } from "./order";

/** 함수의 호출 순서 테스트 */
test("first => second => third 실행 순서를 확인한다", () => {
  const spy1 = jest.fn(first);
  const spy2 = jest.fn(second);
  const spy3 = jest.fn(third);

  spy1();
  spy2();
  spy3();

  expect(spy1.mock.invocationCallOrder[0]).toBeLessThan(
    spy2.mock.invocationCallOrder[0]
  );
  expect(spy3.mock.invocationCallOrder[0]).toBeGreaterThan(
    spy2.mock.invocationCallOrder[0]
  );
});

/** 복잡한 객체 인수 일부 테스트 */
test("일부 테스트", () => {
  const fn = jest.fn();

  fn({
    a: {
      b: {
        c: "hello",
      },
      d: "bye",
    },
    e: ["f"],
  });

  /** 복잡한 인수의 경우
   * toHaveBeenCalledWith 내부에 입력하는데에 한계가 있음
   */
  expect(fn).toHaveBeenCalledWith({
    a: {
      b: {
        c: "hello",
      },
      d: "bye",
    },
    e: ["f"],
  });

  /** 인수 중 가장 중요한 속성 값을 테스트 */
  expect(fn.mock.calls[0][0].a.b.c).toBe("hello");
});
