import { faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import Button from 'reactstrap/lib/Button';

export default class FixProblemsHelp extends React.Component {

    public render() {
        return (
            <div>
                <h2>{intl.get('help.fixproblems.title')}</h2>
                <p>
                    {intl.get('help.fixproblems.desc', { appname: intl.get('app.title') })}
                    <Button color="link" href="/contact" >
                        <FontAwesomeIcon icon={faFileSignature} fixedWidth />{' '}
                    </Button>
                </p>
            </div>
        );
    }
}
