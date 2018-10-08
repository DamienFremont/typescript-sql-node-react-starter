import * as React from 'react';
import * as intl from 'react-intl-universal';

class ProductHelp extends React.Component {

    public render() {
        return (
            <div>
                <h2>{intl.get('help.product.title')}</h2>
                <p>{intl.get('help.product.desc')}</p>
            </div>
        );
    }
}
export default ProductHelp;