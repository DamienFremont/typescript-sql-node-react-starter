import { faSadTear, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class NotFound extends React.Component {

  public render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/"><FontAwesomeIcon icon={faHome} fixedWidth /></Link></BreadcrumbItem>
        </Breadcrumb>
        
        <div className="mt-5 mb-5 text-center">
          <div> <FontAwesomeIcon icon={faSadTear} size="10x" />{' '}  </div>
          <h1> {intl.get('notfound.title')}</h1>
          <p> {intl.get('notfound.desc')}</p>
        </div>
      </div>
    );
  }
}
export default NotFound;