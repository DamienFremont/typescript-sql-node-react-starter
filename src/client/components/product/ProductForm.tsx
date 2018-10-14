import { faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import Button from 'reactstrap/lib/Button';

import ProductAttributes from '../../../shared/api/ProductModel';

interface ProductFormProps {
  data: ProductAttributes;
  onSubmit: (data: ProductAttributes) => void;
}

class ProductForm extends React.Component<ProductFormProps, any> {

  constructor(props: ProductFormProps, state: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.data;
  }

  public render() {
    const productTypes = ["UNKNOWN", "FOOD", "WEAR", "TOY"];
    return (
      <Form className="p-4" onSubmit={this.handleSubmit}>

        <input type="hidden" value={this.state.id} />

        <FormGroup row>
          <Label for="productName">{intl.get('product.form.fields.name.label')}</Label>
          <Input
            type="text" name="name" id="productName"
            value={this.state.name}
            onChange={this.setValue.bind(this, 'name')}
            placeholder={intl.get('product.form.fields.name.placeholder')} />
        </FormGroup>

        <FormGroup row>
          <Label for="productType">{intl.get('product.form.fields.type.label')}</Label>
          <Input
            type="select" name="type" id="productType"
            value={this.state.type}
            onChange={this.setValue.bind(this, 'type')} >
            {productTypes.map(this.renderOption)}
          </Input>
        </FormGroup>

        <FormGroup row>
          <Label for="productPrice">{intl.get('product.form.fields.price.label')}</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
            <Input
              type="number" name="price" id="productPrice"
              value={this.state.price}
              onChange={this.setValue.bind(this, 'price')}
              step="1"
              placeholder={intl.get('product.form.fields.price.placeholder')} />
            <InputGroupAddon addonType="append">.00</InputGroupAddon>
          </InputGroup>
        </FormGroup>

        <div className="mt-5">
          <Button color="primary" type="submit">
            <FontAwesomeIcon icon={faSave} fixedWidth /> {intl.get('form.submit')}
          </Button>{' '}
          <Button color="secondary" tag={Link} to="/product/search">
            <FontAwesomeIcon icon={faUndo} fixedWidth /> {intl.get('form.cancel')}
          </Button>
        </div>

      </Form>
    );
  }

  private setValue(field: any, event: any) {
    const object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  private renderOption(value: string) {
    return (
      <option key={value}>{value}</option>
    );
  }

  private handleSubmit(event: any) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

}
export default ProductForm;