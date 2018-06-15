import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let clickLogout;

beforeEach(() => {
  clickLogout = jest.fn();
});

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const wrapper = shallow(<Header clickLogout={clickLogout} />);
  wrapper.find('button').simulate('click');
  expect(clickLogout).toHaveBeenCalled();
});


// should call startLogout on button click

// LoginPage - as above
