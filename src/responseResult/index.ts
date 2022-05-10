export interface Result<T> {
  code: number;
  msg: string;
  data: T;
}

export function errorResult<T>(data: any, msg: string): Result<T> {
  return {
    code: -1,
    msg,
    data,
  };
}

export function successResult<T>(data: any, msg?: string): Result<T> {
  return {
    code: 0,
    msg: msg || "ok",
    data,
  };
}
