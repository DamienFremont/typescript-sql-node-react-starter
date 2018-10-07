import * as React from 'react';
import './StickyFooter.css';

interface IStickyFooterProps {
    className: string;
}

/**
 * @see https://getbootstrap.com/docs/4.1/examples/sticky-footer/
 */
export class StickyFooter extends React.Component<IStickyFooterProps, any> {

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