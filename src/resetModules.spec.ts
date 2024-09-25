/**
 * 한 번 import 하면 캐싱되기 때문에 동일한 모듈을 불러옴
 * 각 테스트 전 import 리셋
 * !! 각 테스트는 독립적으로 만드는게 좋음
 */
beforeEach(() => {
  jest.resetModules();
});

test("첫번째 import", async () => {
  const c = await import("./mockClass");
  (c as any).prop = "hello";
  expect(c).toBeDefined();
});

test("두번째 import", async () => {
  const c = await import("./mockClass");
  //   expect((c as any).prop).toBe("hello");
});
