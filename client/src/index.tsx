import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as fr from 'react-intl/locale-data/fr';

import App from './App';
import * as enMessage from './i18n/translations/en.json';
import * as frMessage from './i18n/translations/fr.json';
import registerServiceWorker from './registerServiceWorker';

/* Import basic support for another locale if needed
   ('en' is included by default) */
addLocaleData([...en, ...fr]);

const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language /*||
  navigator.userLanguage*/;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

/* Define your translations */
const i18nConfig = {
  locale: 'en',
  messages: enMessage
};

function onChangeLanguage(lang: string) {
  lang = lang.toLowerCase();
  switch (lang) {
      case 'fr': i18nConfig.messages = frMessage; break;
      case 'en': i18nConfig.messages = enMessage; break;
      default: i18nConfig.messages = enMessage; break;
  }
  // this.setState({ locale: lang });
  i18nConfig.locale = lang;
}

// apply lang
onChangeLanguage(languageWithoutRegionCode);

ReactDOM.render(
  <IntlProvider 
    locale={ i18nConfig.locale }  
    messages={ i18nConfig.messages } >
    <App />
  </IntlProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
