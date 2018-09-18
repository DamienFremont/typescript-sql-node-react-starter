import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { StickyFooter } from '../common';

export default class AppFooter extends React.Component {

    public render() {
        return (
            <StickyFooter className="bg-light">
                <Button color="link" size="sm" tag={Link} to="/contact">
                    {intl.get('footer.contact')}
                </Button>{' '}
                <Button color="link" size="sm" tag={Link} to="/help">
                    {intl.get('footer.help')}
                </Button>{' '}
                <Button color="link" size="sm" disabled>
                    {intl.get('footer.copyright')}
                </Button>
            </StickyFooter>
        );
    }
}