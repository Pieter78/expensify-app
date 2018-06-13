import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should setup edit expension action object', () => {
  const action = editExpense('123', { description: 'new description', amount: 100 });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      description: 'new description',
      amount: 100,
    },
  });
});

test('should setup add expense action object with provided value', () => {
  const expenseData = {
    description: 'Rent',
    amount: 10000,
    createdAt: 1000,
    note: 'this was last month',
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('should setup add expense action object with default values.', () => {
  const expenseData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: '',
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});
