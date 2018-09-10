import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';

import { StickyFooter } from '../common';

export default class AppFooter extends React.Component {

    public render() {
        return (
            <StickyFooter className="bg-light">
                <Button color="link" size="sm" href="mailto:test@test.com">
                    <FormattedMessage id="footer.contact" />
                </Button>{' '}
                <Button disabled color="link" size="sm" href="#">
                    <FormattedMessage id="footer.help" />
                </Button>{' '}
                <FormattedMessage id="footer.copyright" />
            </StickyFooter>
        );
    }
}