import { faBoxOpen, faHome, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'reactstrap';
import Button from 'reactstrap/lib/Button';

import ProductAttributes from '../../shared/api/ProductModel';
import ProductAPI from '../api/ProductAPI';
import ProductForm from '../components/product/ProductForm';

interface ProductCreateState {
  data: ProductAttributes;
}

class ProductCreate extends React.Component<any, ProductCreateState> {

  private defaultData: ProductAttributes = {
    id: undefined
  }

  constructor(props: any, state: ProductCreateState) {
    super(props);
    this.state = {
      data: this.defaultData
    };
  }

  public render() {
    return (
      <div>
        <div className="bg-info clearfix px-4 py-2">
          <h1 className="text-white">{intl.get('product.form.title')}{' '}
            <FontAwesomeIcon icon={faBoxOpen} fixedWidth /></h1>
          <p className="text-white ml-1">{intl.get('product.form.description')}</p>
        </div>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/"><FontAwesomeIcon icon={faHome} fixedWidth /></Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/product/search">{intl.get('breadcrumb.product')}</Link></BreadcrumbItem>
          <BreadcrumbItem active>{intl.get('breadcrumb.product.form')}</BreadcrumbItem>
        </Breadcrumb>
        <Container>
          <Row>
            <Col>
              <div className="text-right">
                <Button color="link" tag={Link} to="/help#product">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 11, offset: 1 }}>
              <ProductForm data={this.state.data} onSave={this.handleSave} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  private handleSave() {
    ProductAPI.save(this.state.data)
      .then(result => this.props
        .history.push("/product/search"));
  }


}
export default ProductCreate;