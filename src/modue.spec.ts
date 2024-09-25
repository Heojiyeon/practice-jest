import { obj } from "./module";

/**
 * __mocks__ 내부 module 모킹
 * ex/ 공통적으로 사용되는 모듈을 모킹할 때 따로 분리한 파일을 사용
 */
jest.mock("./module");

/**
 * 모듈을 내 값을 갈아끼울 수도 있음
 * !! obj 자체를 갈아끼우는 것임을 주의
 * !! 호이스팅되기 때문에 test 내부에 작성해도 가장 상단으로 끌어올려짐
 * !! test 내부에 작성했을 때 블록 스코프 관련 이슈가 생길 수 있기 때문에
 * ex/ 여기서만 사용되는 모듈을 모킹할 때 사용
 */
jest.mock("./module", () => {
  return {
    // 모듈 전체를 불러옴
    ...jest.requireActual("./module"),
    obj: {
      ...jest.requireActual("./module").obj,
      method3() {
        return "method3";
      },
    },
  };
});

test("모듈 모킹", () => {
  //   jest.spyOn(obj, "method");
  //   jest.spyOn(obj, "method1");
  //   jest.spyOn(obj, "method2");
  //   jest.spyOn(obj, "method3");
  //   jest.spyOn(obj, "method4");
  jest.replaceProperty(obj, "prop", "replaced");
  console.log(obj);
});
