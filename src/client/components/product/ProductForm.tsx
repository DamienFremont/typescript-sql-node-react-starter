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
  onSave: () => void;
}

interface ProductFormState {
  data: ProductAttributes;
}

class ProductForm extends React.Component<ProductFormProps, ProductFormState> {

  constructor(props: ProductFormProps, state: ProductFormState) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      data: this.props.data
    };
  }

  public render() {
    return (
      <Form className="p-4" onSubmit={this.onFormSubmit}>
        <FormGroup row>
          <Label for="productName">{intl.get('product.form.fields.name.label')}</Label>
          <Input type="text" name="name" id="productName" value={this.state.data.name}
            placeholder={intl.get('product.form.fields.name.placeholder')} />
        </FormGroup>
        <FormGroup row>
          <Label for="productType">{intl.get('product.form.fields.type.label')}</Label>
          <Input type="select" name="type" id="productType" value={this.state.data.type}>
            <option>UNKNOWN</option>
            <option>FOOD</option>
            <option>WEAR</option>
            <option>TOY</option>
          </Input>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleNumber">{intl.get('product.form.fields.price.label')}</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
            <Input type="number" value={this.state.data.price} step="1"
              placeholder={intl.get('product.form.fields.price.placeholder')} />
            <InputGroupAddon addonType="append">.00</InputGroupAddon>
          </InputGroup>
        </FormGroup>
        <Button color="primary" type="submit" >
          <FontAwesomeIcon icon={faSave} fixedWidth /> {intl.get('form.submit')}
        </Button>{' '}
        <Button color="secondary" tag={Link} to="/product/search">
          <FontAwesomeIcon icon={faUndo} fixedWidth /> {intl.get('form.cancel')}
        </Button>
      </Form>
    );
  }

  public handleDataChange(data: ProductAttributes) {
    this.setState({
      data
    });
  }

  private onFormSubmit = (e: any) => {
    this.props.onSave();
  }

}
export default ProductForm;