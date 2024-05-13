import i18n, { i18n as OriginalI18n } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { I18nextTFunction } from './i18nextTFunction';
import en from './locales/en-US';
import fa from './locales/fa-IR';
import { Fa } from '../../../../locale';
import { PersistKey } from '../constants';

interface I18nInstance extends Omit<OriginalI18n, 't' | 'language'> {
  language: 'fa' | 'en';
  t: I18nextTFunction<Fa>;
}

const i18nInstance = i18n as unknown as I18nInstance;

function getValidLanguage() {
  const lang = 'fa';
  //  storage.getString(PersistKey.LANGUAGE);
  if (lang && ['fa', 'en'].includes(lang)) {
    return lang;
  }

  return 'fa';
}

function onLanguageChange(lang: string) {
  // storage.set(PersistKey.LANGUAGE, lang);
}

i18nInstance
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',

    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      fa: {
        translation: fa,
      },
      en: {
        translation: en,
      },
    },
    // if you're using a language detector, do not define the lng option
    lng: getValidLanguage(),

    fallbackLng: 'fa',
  });

i18nInstance.on('languageChanged', onLanguageChange);

export { i18nInstance };
