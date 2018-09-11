import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as fr from 'react-intl/locale-data/fr';

import App from './App';
import * as enMessage from './i18n/translations/en.json';
import registerServiceWorker from './registerServiceWorker';

/* Import basic support for another locale if needed
   ('en' is included by default) */
addLocaleData([...en, ...fr]);

/* Define your translations */
const i18nConfig = {
  locale: 'en',
  messages: enMessage
};

ReactDOM.render(
  <IntlProvider
    locale="fr" defaultLocale="en-US"
    messages={i18nConfig.messages} >
    <App />
  </IntlProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
