import * as React from 'react';
import './StickyFooter.css';

interface StickyFooterProps {
    className: string;
}

/**
 * @see https://getbootstrap.com/docs/4.1/examples/sticky-footer/
 */
export class StickyFooter extends React.Component<StickyFooterProps, any> {

    public render() {
        return (
            <footer className={ "footer "+this.props.className }>
                <div className="container">
                    {this.props.children}
                </div>
            </footer>
        );
    }
}