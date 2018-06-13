import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense;
let removeExpense;
let history;
let wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage
    editExpense={editExpense}
    removeExpense={removeExpense}
    history={history}
    expense={expenses[0]}
  />);
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle EditExpense on submit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenCalledWith(expenses[0].id, expenses[0]);
});

test('should handle RemoveExpense on submit', () => {
  wrapper.find('button').prop('onClick')();
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenCalledWith({ id: expenses[0].id });
});
