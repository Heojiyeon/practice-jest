import { CustomError, customError, error } from "./throwFunction";

/**
 * 함수 안에서 발생하는 에러 테스트
 * expect(error())의 경우, 바로 에러를 발생시키기에 에러를 잡아내는 다음 메서드 실행 불가
 * () => error() 와 같이 에러를 발생시키는 함수를 실행 시키도록 해야 함
 *
 * try-catch를 사용하는 경우, catch에 잡히는 에러는 객체가 되기 때문에 toStrictEqual 사용해야 함
 */
test("error가 발생한다", () => {
  expect(() => error()).toThrow(new Error());
  expect(() => customError()).toThrow(new CustomError());
});

test("error가 발생한다(try-catch)", () => {
  try {
    error();
  } catch (error) {
    expect(error).toStrictEqual(new Error());
  }
});
