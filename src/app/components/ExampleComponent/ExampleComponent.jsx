import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

import './ExampleComponent.scss';

const ExampleComponent = ({ exampleProp }) => {

  const toRender = exampleProp.length > 0 ? exampleProp.map(item => {
    return <div key={ item.name }>{ `${item.name} : ${item.attribute}` }</div>;
  }) : <Button component={ Link } to="/123thisIsAnId" raised color="primary">DaRealData</Button>;

  return <div className="wrapper-class">{ toRender }</div>;
};

ExampleComponent.propTypes = {
  exampleProp: PropTypes.array.isRequired
};

export default ExampleComponent;
