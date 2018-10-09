import { faBoxOpen, faChevronRight, faHome, faPlus, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Badge, Breadcrumb, BreadcrumbItem, Button, Col, Container, Row, Table } from 'reactstrap';

import ProductAPI from '../api/ProductAPI';
import { ProductItem } from '../../shared/api/ProductModel';

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
              <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>{intl.get('product.search.table.columns.name')}</th>
                    <th>{intl.get('product.search.table.columns.type')}</th>
                    <th>{intl.get('product.search.table.columns.price')}</th>
                    <th>{''}</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.datas.map(this.renderRow)}
                  {!this.state.datas.length ? this.renderEmpty() : null}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  private renderRow(value: ProductItem, index: number) {
    return (
      <tr>
        <th scope="row">{value.id}</th>
        <td>{value.name}</td>
        <td>{value.type}</td>
        <td>{value.price} €</td>
        <td>
          <Button color="link" tag={Link} to={"/product/edit/" + value.id} >
            <FontAwesomeIcon icon={faChevronRight} fixedWidth />{' '}
            {intl.get('product.search.buttons.open')}
          </Button>
        </td>
      </tr>
    );
  }

  private renderEmpty() {
    return (
      <tr>
        <td colSpan={4} className="text-center">
          <Badge color="info" pill>{intl.get('form.empty')}</Badge>
        </td>
      </tr>
    );
  }

}
export default ProductSearch;