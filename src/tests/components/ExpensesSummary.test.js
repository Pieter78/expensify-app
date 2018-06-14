import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render correctly with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={199} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render correctly with several expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={10} expensesTotal={122299} />);
  expect(wrapper).toMatchSnapshot();
});
