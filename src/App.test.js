import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders correctly', () => {
  const output = shallow(<App />);
  expect(output).toMatchSnapshot();
});
