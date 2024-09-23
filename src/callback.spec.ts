import { timer } from "./callback";

/**
 * callback 함수 테스트
 * done 매개함수 활용 : callback 함수가 테스트를 끝낼 때까지 기다려줌
 * !! 콜백 함수의 경우 테스트 비추하지만, 꼭 해야겠다면 비동기 함수로 변경해 테스트하는 것을 추천
 */
test("콜백함수를 실행한다", (done) => {
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
});
