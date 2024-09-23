import { obj } from "./toHaveBeenCalled";

/**
 * 실제 데이터를 요청하는 함수의 호출 테스트일 경우
 * 실 데이터 응답을 받고 싶지 않을 때 사용
 * mockImplementation() : 내부 기본 함수 () => {}
 * 요청을 임의로 갈아끼우고 싶을 때 내부 리턴값을 지정할 수 있음
 *
 * ex/ DB 접근, 로그인 요청 등 실 서비스에 영향을 미칠 수 있는 함수 유닛 테스트에 많이 사용
 *
 * spy 초기화
 * (1) mockClear: spy함수가 몇 번, 누구와 실행되었는지와 관련된 정보 초기화
 * (2) mockReset: mockClear + mockImplementation 내부 빈 함수화(() => {})
 * (3) mockRestore: spy함수 제거 (테스트하고자 하는 함수로 돌아감)
 */
test("obj.minus 함수에 스파이를 심고 리턴값을 임의로 변경할 수 있다", () => {
  const spyFn = jest.spyOn(obj, "minus").mockImplementation((a, b) => 3);
  const result = obj.minus(1, 2);

  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result).toBe(3);

  /**
   * spy 함수 제거
   * !! mockReset 실행 시, 다음 테스트에서 실패하는 이유
   * !! 기존 테스트 함수로 돌아가지 않고 () => {} 를 실행하기 때문에 result3의 결과가 undefined
   */
  spyFn.mockRestore();
});

test("obj.minus 함수에 스파이를 심고 딱 한 번 리턴값을 변경하는 메서드를 여러 번 사용할 수 있다", () => {
  const spyFn = jest
    .spyOn(obj, "minus")
    .mockImplementationOnce((a, b) => a + b)
    .mockImplementationOnce(() => 5);

  const result1 = obj.minus(1, 2);
  const result2 = obj.minus(1, 2);
  const result3 = obj.minus(1, 2);

  expect(result1).toBe(3);
  expect(result2).toBe(5);
  expect(result3).toBe(-1);

  expect(obj.minus).toHaveBeenCalledTimes(3);

  // 테스트 함수로 돌아감
  spyFn.mockRestore();
});

test("obj.minus 함수에 스파이를 심고 마지막 리턴값만 지정할 수 있다", () => {
  jest.spyOn(obj, "minus");
  const result = obj.minus(1, 2);

  expect(obj.minus).toHaveBeenCalledTimes(1);

  expect(result).not.toBe(3);
  expect(result).toBe(-1);
});
