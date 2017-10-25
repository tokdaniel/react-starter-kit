import { get } from 'lodash';

export const getExampleData = state => (get(state, 'example.someData', []));
