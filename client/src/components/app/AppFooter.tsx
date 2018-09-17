import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Button } from 'reactstrap';

import { StickyFooter } from '../common';

export default class AppFooter extends React.Component {

    public render() {
        return (
            <StickyFooter className="bg-light">
                <Button color="link" size="sm" href="mailto:test@test.com">
                    {intl.get('footer.contact')}
                </Button>{' '}
                <Button disabled color="link" size="sm" href="#">
                    {intl.get('footer.help')}
                </Button>{' '}
                {intl.get('footer.copyright')}
            </StickyFooter>
        );
    }
}