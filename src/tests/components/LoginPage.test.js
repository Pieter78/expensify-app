import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let clickLogin;

beforeEach(() => {
  clickLogin = jest.fn();
});

test('Should render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('Should call clickLogin on button click', () => {
  const wrapper = shallow(<LoginPage clickLogin={clickLogin} />);
  wrapper.find('button').simulate('click');
  expect(clickLogin).toHaveBeenCalled();
});
