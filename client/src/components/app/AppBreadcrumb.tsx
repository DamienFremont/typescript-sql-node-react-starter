import * as React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class AppFooter extends React.Component {

    public render() {
        return (
            <Breadcrumb>
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
        );
    }
}



