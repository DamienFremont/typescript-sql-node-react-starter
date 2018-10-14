import { faBoxOpen, faHome, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link, Redirect } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Col, Container, Row, Progress } from 'reactstrap';
import Button from 'reactstrap/lib/Button';

import ProductAttributes from '../../shared/api/ProductModel';
import ProductAPI from '../api/ProductAPI';
import ProductForm from '../components/product/ProductForm';

interface ProductEditState {
  data: ProductAttributes;
  id: string;
  toSearch?: boolean
}

class ProductEdit extends React.Component<any, ProductEditState> {

  constructor(props: any, state: ProductEditState) {
    super(props);
    this.state = {
      data: {},
      id: this.props.match.params.id
    };
  }

  public componentDidMount() {
    ProductAPI.findOne(this.state.id).then(data => {
      this.setState({
        data
      });
    });
  }

  public render() {
    if (this.state.toSearch === true) {
      return <Redirect to='/product/search' />
    }
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
              {this.state.data.id ?
                <ProductForm
                  data={this.state.data}
                  onSubmit={this.handleSave()} />
                :
                <Progress animated value={2 * 5} />
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  private handleSave() {
    const ref = this;
    return (data: ProductAttributes) => {
      ProductAPI.update(data).then(result => {
        ref.setState({
          toSearch: true
        });
      });
    };
  }
}
export default ProductEdit;