import { faBoxOpen, faChevronRight, faHome, faPlus, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { BootstrapTable, Options, TableHeaderColumn } from 'react-bootstrap-table';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Badge, Breadcrumb, BreadcrumbItem, Button, Col, Container, Row } from 'reactstrap';

import { ProductItem } from '../../shared/api/ProductModel';
import ProductAPI from '../api/ProductAPI';

interface ProductSearchState {
  datas: ProductItem[];
}

class ProductSearch extends React.Component<any, ProductSearchState> {

  constructor(props: any, state: ProductSearchState) {
    super(props);
    this.state = {
      datas: []
    };
  }

  public componentDidMount() {
    ProductAPI.findAll()
      .then(datas => this.setState({
        datas
      }));
  }

  public render() {
    return (
      <div>
        <div className="bg-info clearfix px-4 py-2">
          <h1 className="text-white">{intl.get('product.search.title')}{' '}
            <FontAwesomeIcon icon={faBoxOpen} fixedWidth /></h1>
          <p className="text-white ml-1">{intl.get('product.search.description')}</p>
        </div>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/"><FontAwesomeIcon icon={faHome} fixedWidth /></Link></BreadcrumbItem>
          <BreadcrumbItem active>{intl.get('breadcrumb.product')}</BreadcrumbItem>
        </Breadcrumb>
        <Container>
          <Row>
            <Col className="mb-4">
              <Button color="primary" tag={Link} to="/product/create" >
                <FontAwesomeIcon icon={faPlus} fixedWidth />{' '}
                {intl.get('product.search.buttons.create')}
              </Button>
            </Col>
            <Col>
              <div className="text-right">
                <Button color="link" tag={Link} to="/help#product">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              {this.state.datas.length ? this.renderTable() : null}
              {!this.state.datas.length ? this.renderEmpty() : null}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  private renderTable() {
    const options = {
      page: 1,  // which page you want to show as default
      sizePerPageList: [{
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: 'All', value: 100
      }], // you can change the dropdown list for size per page
      sizePerPage: 10,  // which size per page you want to locate as default
      pageStartIndex: 0, // where to start counting the pages
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last' // Last page button text
    } as Options;
    return (
      <BootstrapTable
        version="4"
        data={this.state.datas}
        pagination={true}
        options={options}>
        <TableHeaderColumn dataField='id' isKey>#</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>{intl.get('product.search.table.columns.name')}</TableHeaderColumn>
        <TableHeaderColumn dataField='type'>{intl.get('product.search.table.columns.type')}</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>{intl.get('product.search.table.columns.price')}</TableHeaderColumn>
        <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter}>Buttons</TableHeaderColumn>
      </BootstrapTable>
    );
  }

  private buttonFormatter(cell: any, row: ProductItem) {
    return (
      <Button color="secondary" tag={Link} to={"/product/edit/" + row.id} >
        <FontAwesomeIcon icon={faChevronRight} fixedWidth />{' '}
        {intl.get('form.open')}
      </Button>
    );
  }

  private renderEmpty() {
    return (
      <div className="text-center">
        <Badge color="info" pill>{intl.get('form.empty')}</Badge>
      </div>
    );
  }

}
export default ProductSearch;