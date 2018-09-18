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
    private renderItem(value: INameValue, index: any) {
        const url = "/?lang=" + value.value;
        const imgSrc = "/locales/" + value.value + ".png";
        return (
            <DropdownItem key={index}>
                <Button color="link" href={url}>
                    <img src={imgSrc} className="AppLocaleSelector_flag" />
                    {' '}
                    {value.name}
                </Button>
            </DropdownItem>
        );
    }
}