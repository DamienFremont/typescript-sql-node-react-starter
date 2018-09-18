import * as React from 'react';
import * as intl from 'react-intl-universal';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import './AppLocaleSelector.css';

interface IAppLocaleSelectorProps {
    locales: INameValue[];
}

interface INameValue {
    name: string;
    value: string;
}

/**
 * @see https://github.com/alibaba/react-intl-universal/blob/master/examples/browser-example/
 */
export default class AppLocaleSelector extends React.Component<IAppLocaleSelectorProps, any> {

    constructor(props: IAppLocaleSelectorProps) {
        super(props);
    }

    public render() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {intl.getInitOptions().currentLocale}
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.locales.map(this.renderItem)}
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    /**
     *  @see https://www.flaticon.com/packs/countrys-flags
     */
    private renderItem(element: INameValue) {
        const url = "/?lang=" + element.value;
        const imgSrc = "/locales/" + element.value + ".png";
        return (
            <DropdownItem >
                <Button color="link" href={url}>
                    <img src={imgSrc} className="AppLocaleSelector_flag" />
                    {' '}
                    {element.name}
                </Button>
            </DropdownItem>
        );
    }
}