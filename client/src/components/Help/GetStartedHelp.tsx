import * as React from 'react';
import { FormattedMessage } from 'react-intl';

export default class GetStartedHelp extends React.Component {

    public render() {
        return (
            <div>
                <h2><FormattedMessage id="help.getstarted.title" values={{ appname: <FormattedMessage id="app.title" /> }} /></h2>
                <p><FormattedMessage id="help.getstarted.desc" /></p>
            </div>
        );
    }
}
