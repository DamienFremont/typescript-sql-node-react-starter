import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'reactstrap/lib/Button';

export default class FixProblemsHelp extends React.Component {

    public render() {
        return (
            <div>
                <h2><FormattedMessage id="help.fixproblems.title" /></h2>
                <p>
                    <FormattedMessage id="help.fixproblems.desc" values={{ appname: <FormattedMessage id="app.title" /> }} />
                    <Button color="link" href="/contact" >
                        <FontAwesomeIcon icon={faFileSignature} fixedWidth />{' '}
                    </Button>
                </p>
            </div>
        );
    }
}
