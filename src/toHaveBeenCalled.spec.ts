import { sum, obj } from "./toHaveBeenCalled";

/**
 * 함수가 호출되었는지 확인하기 위한 spy(감시자)를 부착
 * spy를 활용해 함수를 호출하면 호출 여부를 파악할 수 있다
 *
 * !! 호출 여부 판단의 경우, 실제로 사용 의미가 없는 경우가 많음
 * !! 호출의 횟수 또는 함수 인자를 파악하는 것이 더 좋음
 */
test("sum함수가 호출되었다", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);

  expect(sumSpy).toHaveBeenCalled();
});

test("sum함수가 1번 호출되었다", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);

  expect(sumSpy).toHaveBeenCalledTimes(1);
});

test("sum함수가 1, 2와 함께 호출되었다", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);

  expect(sumSpy).toHaveBeenCalledWith(1, 2);
});

test("minus함수가 1번 호출되었다(spy 생성)", () => {
  const sumSpy = jest.fn(obj.minus);
  sumSpy(1, 2);

  expect(sumSpy).toHaveBeenCalledTimes(1);
});

test("minus함수가 1번 호출되었다(spy 삽입)", () => {
  const minusSpy = jest.spyOn(obj, "minus");
  const result = obj.minus(1, 2);

  expect(minusSpy).toHaveBeenCalledTimes(1);
  expect(result).toBe(-1);
});
