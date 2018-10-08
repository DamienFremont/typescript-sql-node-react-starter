import { faChevronRight, faHome, faPlus, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Col, Container, Row, Table } from 'reactstrap';

class ProductSearch extends React.Component {

  public render() {
    return (
      <div>
        <div className="bg-info clearfix px-4 py-2">
          <h1 className="text-white">{intl.get('product.search.title')}</h1>
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
                    <th>{intl.get('product.search.table.columns.price')}</th>
                    <th>{''}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Test</td>
                    <td>123€</td>
                    <td>
                      <Button color="link" tag={Link} to="/product/edit/1" >
                        <FontAwesomeIcon icon={faChevronRight} fixedWidth />{' '}
                        {intl.get('product.search.buttons.open')}
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ProductSearch;