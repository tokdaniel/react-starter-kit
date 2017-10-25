import React from 'react';
import PropTypes from 'prop-types';

import { ExampleComponent } from 'components';
import enhance from './enhancers';


const ExampleContainer = ({ exampleData }) => (
  [
    <ExampleComponent key="key" exampleProp={ exampleData }/>
  ]
);

ExampleContainer.propTypes = {
  match: PropTypes.object.isRequired
};

export default enhance(ExampleContainer);
