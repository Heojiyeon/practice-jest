/**
 * mockFunc 파일 내 모든 함수 모킹
 */
jest.mock("./mockFunc", () => {
  return {
    ...jest.requireActual("./mockFunc"),
    double: jest.fn(),
  };
});

jest.mock("./mockClass");

import func from "./mockFunc";
import c from "./mockClass";

test("mockFunc, class가 정의되어 있어야 한다", () => {
  // 한 번 모킹을 하면 이후로 계속 모킹된 함수만 가져올 수 있기 때문에 원래 함수를 가져오기 위함
  const original = jest.requireActual("./mockFunc");

  expect(func).toBeDefined();
  expect(c).toBeDefined();
});
