import { i18n as OriginalI18n } from 'i18next';
import 'react-i18next';

import fa from './packages/core/src/i18n/locales/fa-IR';
import { I18nextTFunction } from './packages/core/src/i18n/i18nextTFunction';

type Fa = typeof fa;

type GetParams<T> = T extends `${infer L}{{${infer U}}}${infer R}`
  ? Escape<U> | GetParams<R> | GetParams<L>
  : never;

type Escape<T extends number | string | symbol> = T extends `- ${infer R}` ? R : T;

declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    // typeof fa
    translation: Record<keyof Fa, string>;
    server: Record<string, string>;
  }

  type TFuncReturn<N, TKeys, TDefaultResult, TKPrefix = undefined, T = DefaultResources> = string;

  interface i18n extends Omit<OriginalI18n, 't'> {
    t: I18nextTFunction<Fa>;
  }

  export function useTranslation(): {
    t: I18nextTFunction<Fa>;
    i18n: i18n;
    ready: boolean;
  };
}
declare module 'i18next' {
  export interface i18n extends Omit<OriginalI18n, 't'> {
    t: I18nextTFunction<Fa>;
  }
}
