import * as React from 'react';
import * as intl from 'react-intl-universal';

export default class GetStartedHelp extends React.Component {

    public render() {
        return (
            <div>
                <h2>{intl.get('help.getstarted.title', { appname: intl.get('app.title') })}</h2>
                <p>{intl.get('help.getstarted.desc')}</p>
            </div>
        );
    }
}
