const { isLoggedIn, isNotLoggedIn } = require("./");

/** 구체적인 구현을 설명에 넣지 말자!
 * 변수명이 변경될 때 테스트 설명 문구도 변경해야 함
 * 테스트는 실패 후 성공해야 한다 (비동기와 같은 예외 상황이 나올 수 있음)
 * 테스트 커버리지는 100%가 가장 이상적임
 */

/** 테스트 커버리지가 100%여도 에러가 나는 이유
 * 모든 코드를 다 거쳐가기만 해도 커버리지는 100%
 * 조건문의 경우 모든 로직을 커버하지 않아도 100%가 된다는 뜻이기 때문
 */
describe("isLoggedIn", () => {
  test("로그인 한 경우 next를 호출한다", () => {
    const req = {
      // 로그인한 상태인 경우 true 반환
      isAuthenticated() {
        return true;
      },
    };
    const res = {};
    const next = jest.fn();

    isLoggedIn(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
  });

  test('로그인을 안 한 상태면 403 "로그인 필요"를 응답한다', () => {
    const req = {
      isAuthenticated() {
        // 로그인한 상태인 경우 false 반환
        return false;
      },
    };
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    const next = jest.fn();
    isLoggedIn(req, res, next);

    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith("로그인 필요");
  });
});

describe("isNotLoggedIn", () => {
  test("로그인 하지 않은 경우 next를 호출한다", () => {
    const req = {
      // 로그인 하지 않은 상태인 경우 true 반환
      isAuthenticated() {
        return false;
      },
    };
    const res = {};
    const next = jest.fn();

    isNotLoggedIn(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });

  test("로그인 하지 않은 경우 리다이렉트한다", () => {
    const req = {
      // 로그인 하지 않은 상태인 경우 true 반환
      isAuthenticated() {
        return true;
      },
    };
    const res = {
      redirect: jest.fn(),
    };
    const next = jest.fn();
    isNotLoggedIn(req, res, next);
    expect(next).not.toHaveBeenCalled();
    expect(res.redirect).toHaveBeenCalledWith(
      "/?error=%EB%A1%9C%EA%B7%B8%EC%9D%B8%ED%95%9C%20%EC%83%81%ED%83%9C%EC%9E%85%EB%8B%88%EB%8B%A4."
    );
  });
});
