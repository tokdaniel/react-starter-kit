import { EXAMPLE_DATA_RECEIVED, NO_EXAMPLE_DATA_RECEIVED } from 'actions/example';

export default (state = {}, action) => {
  switch (action.type) {
    case EXAMPLE_DATA_RECEIVED:
      return action.payload;
    case NO_EXAMPLE_DATA_RECEIVED:
      return state;
    default:
      return state;
  }
}