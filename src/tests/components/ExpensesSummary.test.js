import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render correctly with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]} total={0} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render correctly with several expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} total={113195} />);
  expect(wrapper).toMatchSnapshot();
});
