import * as React from 'react';
import { Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';

export interface PaginatorProps {
    length: number;
    pageSize: number;
    pageSizeOptions?: number[];

    itemLinkPattern: (data: any) => string;
    onPageChange: (page: Page) => void;

    itemsPerPageLabel?: string;
    ariaLabel?: string;
}

export interface PageEvent {
    length: number;
    pageSize: number;
    pageIndex: number;
}

export interface Page {
    page: number;
    current?: boolean

    link?: string;
    method?: () => void;
}

/**
 * Inspired by Google's Material Paginator
 * @see https://material.angular.io/components/paginator/overview
 */
export class Paginator extends React.Component<PaginatorProps, any> {

    public render() {
        const itemsLength = this.props.length / this.props.pageSize;
        const items = this.createItems(itemsLength);
        const firstPage = {
            page: 1,
        } as Page;
        const lastPage = {
            page: itemsLength
        } as Page;
        firstPage.link = this.props.itemLinkPattern(firstPage);
        lastPage.link = this.props.itemLinkPattern(lastPage);
        return (
            <Container>
                <Row>
                    <Col>
                        <span>{this.props.itemsPerPageLabel || "Items per page"} : {this.props.pageSize}</span>
                    </Col>
                    <Col>
                        <Pagination aria-label={this.props.ariaLabel || "Page navigation"}>
                            <PaginationItem>
                                <PaginationLink previous href={firstPage.link} />
                            </PaginationItem>
                            {items.map(this.renderNumericPage(this.props.pageSize))}
                            <PaginationItem>
                                <PaginationLink next href={lastPage.link} />
                            </PaginationItem>
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        );
    }

    private renderNumericPage(pageSize: number) {
        return (item: Page) => {
            return (
                <PaginationItem>
                    <PaginationLink href={item.link}> {item.page} </PaginationLink>
                </PaginationItem>
            );
        }
    }

    private createItems(itemsLength: number) {
        const items = [] as Page[];
        for (let index = 0; index < itemsLength; index++) {
            const element = {
                page: (index + 1),
                current: false
            } as Page;
            items.push(element);
        }
        return items;
    }
}