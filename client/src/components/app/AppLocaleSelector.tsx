import * as React from 'react';
import * as intl from 'react-intl-universal';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import Button from 'reactstrap/lib/Button';

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

    private renderItem(element: INameValue) {
        const url = "/?lang=" + element.value;
        return (
            <DropdownItem >
                <Button color="link" href={url}>
                    {element.name}
                </Button>
            </DropdownItem>
        );
    }

}