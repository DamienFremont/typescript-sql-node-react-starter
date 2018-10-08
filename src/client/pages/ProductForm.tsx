import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'reactstrap/lib/Button';

class ProductForm extends React.Component {

  public render() {
    return (
      <div>
        <div className="bg-info clearfix px-4 py-2">
          <h1 className="text-white">{intl.get('product.form.title')}</h1>
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
        </Container>
      </div>
    );
  }
}
export default ProductForm;