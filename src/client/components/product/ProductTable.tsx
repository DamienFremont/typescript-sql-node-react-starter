import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { BootstrapTable, FetchInfo, Options, RemoteObjSpec, TableHeaderColumn } from 'react-bootstrap-table';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { ProductItem } from '../../../shared/api/ProductModel';

interface ProductTableProps {
    datas: ProductItem[];
    dataTotalSize: number
    fetchDatas: ((page: number, sizePerPage: number) => void);
}

interface ProductTableState {
    currentPage: number
    sizePerPage: number
}

class ProductTable extends React.Component<ProductTableProps, ProductTableState> {

    constructor(props: ProductTableProps, state: any) {
        super(props);
        this.state = {
            currentPage: 1,
            sizePerPage: 5,
        };
    }

    public render() {
        return (
            <BootstrapTable
                version="4"
                data={this.props.datas}
                remote={this.remote}
                fetchInfo={this.fetchInfo()}
                pagination={true}
                options={this.options()}>
                <TableHeaderColumn dataField='id' isKey>#</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>{intl.get('product.search.table.columns.name')}</TableHeaderColumn>
                <TableHeaderColumn dataField='type'>{intl.get('product.search.table.columns.type')}</TableHeaderColumn>
                <TableHeaderColumn dataField='price'>{intl.get('product.search.table.columns.price')}</TableHeaderColumn>
                <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter}>Buttons</TableHeaderColumn>
            </BootstrapTable>
        );
    }

    private options(): Options {
        return {
            page: this.state.currentPage,
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: 100
            }],
            sizePerPage: this.state.sizePerPage,
            paginationShowsTotal: true,
            onPageChange: this.onPageChange()
        };
    }

    private remote(remoteObj: RemoteObjSpec): RemoteObjSpec {
        remoteObj.pagination = true;
        remoteObj.sort = true;
        remoteObj.filter = true;
        remoteObj.search = true;
        return remoteObj;
    }

    private fetchInfo(): FetchInfo {
        return {
            dataTotalSize: this.props.dataTotalSize
        };
    }

    private buttonFormatter(cell: any, row: ProductItem) {
        return (
            <Button color="secondary" tag={Link} to={"/product/edit/" + row.id} >
                <FontAwesomeIcon icon={faChevronRight} fixedWidth />{' '}
                {intl.get('form.open')}
            </Button>
        );
    }

    private onPageChange() {
        const ref = this; // FIXME: losing this reference after BootstrapTable
        return (currentPage: number, sizePerPage: number) => {
            ref.props.fetchDatas(currentPage, sizePerPage);
        };
    }
}
export default ProductTable;