import exampleData from '../../mocks/exampleData.json';

export const EXAMPLE_DATA_RECEIVED = 'starter-project/EXAMPLE_DATA/RESPONSE_RECEIVED';
export const NO_EXAMPLE_DATA_RECEIVED = 'starter-project/EXAMPLE_DATA/NO_RESPONSE_RECEIVED';

export function fetchExampleData(exampleId) {
  return async dispatch => {
    await setTimeout(() => {

      if (exampleId === exampleData.someId) {
        dispatch({
          type: EXAMPLE_DATA_RECEIVED,
          payload: exampleData
        });
      } else {
        dispatch({
          type: NO_EXAMPLE_DATA_RECEIVED,
        });
      }

    }, 200);
  };
}
