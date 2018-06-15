import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({
    id, description, note, amount, createdAt,
  }) => {
    expensesData[id] = {
      description, note, amount, createdAt,
    };
  });

  database.ref('expenses').set(expensesData).then(() => done());
});

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
  const action = addExpense(expenses[2]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});

  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 10000,
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData,
      },
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snap) => {
    expect(snap.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});

  const defaultExpenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpenseData, //
      },
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snap) => {
    expect(snap.val()).toEqual(defaultExpenseData); //
    done();
  });
});

test('set setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  });
});

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore({});

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
    done();
  });
});
