import { timer } from "./callback";

/**
 * callback 함수 테스트
 * done 매개함수 활용 : callback 함수가 테스트를 끝낼 때까지 기다려줌
 * !! 콜백 함수의 경우 테스트 비추하지만, 꼭 해야겠다면 비동기 함수로 변경해 테스트하는 것을 추천
 */

/**
 * test는 5초 이내에 종료되어야 함
 */
test("콜백함수를 실행한다", (done) => {
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
}, 25_000);

test("임의로 설정한 타이머를 실행한다", (done) => {
  /** 타이머 테스트 시 expect 횟수를 미리 지정해서 확인해보면 좋음 */
  expect.assertions(1);

  jest.useFakeTimers();
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
  jest.runAllTimers();
  // jest.advanceTimersByTime(10_000); // 수동으로 10초를 흘려보냄

  jest.useRealTimers();
});
