import { noPromise, okPromise } from "./asyncFunction";
// import * as fns from "./asyncFunction";

/**
 * 비동기함수 테스트
 * promise 함수인 경우 resolve되기 전에 test가 끝날 수 있기에 return을 반드시 붙여야 함
 * success: resolves, then
 * fail: rejects, catch
 */
test("okPromise 테스트1", () => {
  const okSpy = jest.fn(okPromise);

  return expect(okSpy()).resolves.toBe("ok");
  // jest.spyOn(fns, "okPromise").mockResolvedValue("ok");
  // return expect(fns.okPromise()).resolves.toBe("ok");
});

test("okPromise 테스트2", () => {
  const okSpy = jest.fn(okPromise);

  return okSpy().then((result) => {
    expect(result).toBe("ok");
  });
});

test("okPromise 테스트3", async () => {
  const okSpy = jest.fn(okPromise);
  const result = await okSpy();

  expect(result).toBe("ok");
});

test("noPromise 테스트1", () => {
  const noSpy = jest.fn(noPromise);

  return expect(noSpy()).rejects.toBe("no");
});

test("noPromise 테스트2", () => {
  const noSpy = jest.fn(noPromise);

  return noSpy().catch((result) => {
    expect(result).toBe("no");
  });
});

test("noPromise 테스트3", async () => {
  const noSpy = jest.fn(noPromise);

  try {
    await noSpy();
  } catch (error) {
    expect(error).toBe("no");
  }
});

/**
 * async-await 함수 테스트
 */
test("okAsync 테스트1", () => {
  const okSpy = jest.fn(okPromise);

  return expect(okSpy()).resolves.toBe("ok");
});

test("okAsync 테스트2", () => {
  const okSpy = jest.fn(okPromise);

  return okSpy().then((result) => {
    expect(result).toBe("ok");
  });
});

test("okAsync 테스트3", async () => {
  const okSpy = jest.fn(okPromise);
  const result = await okSpy();

  expect(result).toBe("ok");
});
