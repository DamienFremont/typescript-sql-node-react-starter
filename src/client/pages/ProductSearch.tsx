import { faBoxOpen, faHome, faPlus, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Badge, Breadcrumb, BreadcrumbItem, Button, Col, Container, Row } from 'reactstrap';

import { FindAllResponse, ProductItem } from '../../shared/api/ProductModel';
import ProductAPI from '../api/ProductAPI';
import ProductTable from '../components/product/ProductTable';

interface ProductSearchState {
  datas: ProductItem[]
  dataTotalSize: number
  sizePerPage: number
  currentPage: number
}

class ProductSearch extends React.Component<any, ProductSearchState> {

  constructor(props: any, state: ProductSearchState) {
    super(props);
    this.state = {
      datas: [],
      dataTotalSize: 0,
      currentPage: 1,
      sizePerPage: 5
    };
  }

  public componentDidMount() {
    this.fetchDatas()(this.state.currentPage, this.state.sizePerPage);
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
              {!this.state.dataTotalSize ? this.renderEmpty() : null}
              {this.state.dataTotalSize ? this.renderTable() : null}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  private renderEmpty() {
    return (
      <div className="text-center">
        <Badge color="info" pill>{intl.get('form.empty')}</Badge>
      </div>
    );
  }

  private renderTable() {
    return (
      <ProductTable
        datas={this.state.datas}
        dataTotalSize={this.state.dataTotalSize}
        fetchDatas={this.fetchDatas()} />
    );
  }

  private fetchDatas() {
    const ref = this; // FIXME: losing this reference after BootstrapTable
    return (currentPage: number, sizePerPage: number) => {
      ProductAPI.findAll({
        page: currentPage,
        size: sizePerPage
      })
        .then((response: FindAllResponse) => {
          ref.setState({
            datas: response.products,
            dataTotalSize: response.page.totalElements
          });
        });
    }
  }
}
export default ProductSearch;