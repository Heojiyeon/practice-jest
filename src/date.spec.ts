import { after3days } from "./date";

test("현재 날짜로부터 3일 후를 리턴한다", () => {
  /**
   * 시간 차가 발생할 수 있음
   * const date = new Date();
   * date.setDate(date.getDate() + 3);
   * expect(after3days()).toStrictEqual(date);
   */
  jest.useFakeTimers().setSystemTime(new Date(2024, 9, 24));
  expect(after3days()).toStrictEqual(new Date(2024, 9, 27));
});

afterEach(() => {
  // useFakeTimers가 유지되기 때문에 해제해줘야 함
  jest.useRealTimers();
});
