import * as React from 'react';
import { Button } from 'reactstrap';
import { StickyFooter } from '../common';

export default class AppFooter extends React.Component {

    public render() {
        return (
            <StickyFooter className="bg-light">
                <Button color="link" size="sm" href="mailto:test@test.com">Contact</Button>{' '}
                <Button disabled color="link" size="sm" href="#">Help</Button>{' '}
                Copyright
            </StickyFooter>
        );
    }
}