import * as React from 'react';
import { FormattedMessage } from 'react-intl';

export default class HomeHelp extends React.Component<any, any> {

    public render() {
        return (
            <div>
                <h2><FormattedMessage id="help.home.title" /></h2>
                <p><FormattedMessage id="help.home.desc" /></p>
            </div>
        );
    }
}
