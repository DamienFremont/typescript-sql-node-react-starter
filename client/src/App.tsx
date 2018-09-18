import 'bootstrap/dist/css/bootstrap.css';

import axios from 'axios';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import logo from './logo.svg';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

interface IAppState {
  initDone?: boolean;
}

class App extends React.Component<any, IAppState> {

  public static LOCALES = [
    { name: "English", value: "en-US" },
    { name: "Français", value: "fr-FR" },
  ];

  public componentDidMount() {
    this.loadLocales();
  }

  public render() {
    return (
      (this.state && this.state.initDone) && <Router>
        <MainLayout logo={logo}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/help/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </MainLayout>
      </Router>
    );
  }

  /**
   * @see https://github.com/alibaba/react-intl-universal/blob/master/examples/browser-example/
   */
  private loadLocales() {
    let currentLocale = intl.determineLocale({
      cookieLocaleKey: "lang",
      urlLocaleKey: "lang",
    });
    if (!App.LOCALES.find((element) => {
      return element.value === currentLocale;
    })) {
      currentLocale = "en-US";
    }
    axios
      .get(`/locales/${currentLocale}.json`)
      .then(res => {
        // init method will load CLDR locale data according to currentLocale
        return intl.init({
          currentLocale,
          locales: {
            [currentLocale]: res.data
          }
        });
      })
      .then(() => {
        // After loading CLDR locale data, start to render
        this.setState({ initDone: true });
      });
  }
}

export default App;