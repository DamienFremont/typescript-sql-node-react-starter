import { faSave, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSONSchema6 } from 'json-schema';
import * as _ from 'lodash';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import Form, { UiSchema } from 'react-jsonschema-form';
import { Link } from 'react-router-dom';
import Button from 'reactstrap/lib/Button';

import ProductAttributes from '../../../shared/api/ProductModel';

interface ProductFormProps {
  data: ProductAttributes;
  onSubmit: (data: ProductAttributes) => void;
}

class ProductForm extends React.Component<ProductFormProps, ProductAttributes> {

  constructor(props: ProductFormProps, state: any) {
    super(props);
    this.state = this.props.data;
  }

  public render() {
    const productTypes = ["UNKNOWN", "FOOD", "WEAR", "TOY"];
    const schema = this.schema(productTypes);
    const uiSchema = this.uiSchema();
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={this.state}
        onSubmit={this.onSubmit()}>
        <div className="mt-3">
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

  private schema(productTypes: string[]) {
    const schema = {
      title: intl.get('product.form.title'),
      type: "object",
      required: ["name"],
      properties: {
        name: {
          title: intl.get('product.form.fields.name.label'),
          type: "string",
          default: ""
        },
        type: {
          title: intl.get('product.form.fields.type.label'),
          type: "string",
          default: productTypes[0],
          enum: productTypes
        },
        price: {
          title: intl.get('product.form.fields.price.label'),
          type: "number",
          default: null
        }
      }
    } as JSONSchema6;
    const existingProperties = {
      createdAt: {
        title: intl.get('product.form.fields.createdAt.label'),
        type: "string",
        format: "date-time"
      },
      updatedAt: {
        title: intl.get('product.form.fields.updatedAt.label'),
        type: "string",
        format: "date-time"
      },
      archived: {
        title: intl.get('product.form.fields.archived.label'),
        type: "boolean",
        default: false
      }
    } as JSONSchema6;
    if (this.state.id) {
      const properties = _.merge(schema.properties, existingProperties);
      schema.properties = properties;
    }
    return schema;
  }

  private uiSchema() {
    return {
      name: {
        "ui:placeholder": intl.get('product.form.fields.name.placeholder')
      },
      price: {
        "ui:placeholder": intl.get('product.form.fields.price.placeholder')
      }
    } as UiSchema;
  }

  private onSubmit() {
    return (object: any) => {
      this.props.onSubmit(object.formData);
    }
  }

}
export default ProductForm;