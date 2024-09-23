/**
 * 비동기 함수
 * (1) 일반함수인데 리턴값만 promise인 경우
 * (2) 함수 자체가 async함수인 경우 (reurn, throw를 자동으로 promise로 감싸줌)
 */
export function okPromise() {
  return Promise.resolve("ok");
}

export function noPromise() {
  return Promise.reject("no");
}

export async function okAsync() {
  return "ok";
}
export async function noAsync() {
  throw "no";
}
