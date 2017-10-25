import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { fetchExampleData } from 'actions/example';
import { getExampleData } from "selectors/exampleData";

export const mapStateToProps = state => {
  const exampleData = getExampleData(state);

  return { exampleData };
};

export const mapDispatchToProps = (dispatch, { match }) => ({
  fetchExampleData: () => dispatch(fetchExampleData(match.params.someId))
});

export const lifecycleMethods = {
  componentWillMount() {
    this.props.fetchExampleData();
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(lifecycleMethods)
);
