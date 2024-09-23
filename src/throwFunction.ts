/** 함수 안에서 발생하는 에러 */
export function error() {
  throw new Error();
}

export class CustomError extends Error {}
export function customError() {
  throw new CustomError();
}
