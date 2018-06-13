import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Motorboat',
    note: '',
    amount: 2295000,
    createdAt: moment(),
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit and expense', () => {
  const updates = {
    price: '1000',
    description: 'Expensive Gum',
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates,
  };

  const state = expensesReducer(expenses, action);

  expect(state[0]).toEqual({ ...expenses[0], ...updates });
});

// should not edit an expense if id does not exist
test('should not edit an expense if id does not exist', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});
