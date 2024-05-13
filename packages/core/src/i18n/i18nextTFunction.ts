type GetParams<T> = T extends `${infer L}{{${infer U}}}${infer R}`
  ? Escape<U> | GetParams<R> | GetParams<L>
  : never;

type Escape<T extends number | string | symbol> = T extends `- ${infer R}` ? R : T;

export type I18nextTFunction<T extends Record<string, string>> = <K extends keyof T = keyof T>(
  key: K,
  ...param: GetParams<T[K]> extends never ? [void] : [Record<GetParams<T[K]>, string>]
) => string;
