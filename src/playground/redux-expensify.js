import { createStore, combineReducers } from 'redux';

import uuid from 'uuid';

const addExpense = ( { description = '', note = '', amount = 0, createdAt = 0,  } = {} ) =>
  ({ type: 'ADD_EXPENSE', expense: { id: uuid(), description,  note, amount, createdAt, }});

const removeExpense = ( { id }) => ({ type: 'REMOVE_EXPENSE', id });
  
const editExpense = ( id, updates ) => ({ type: 'EDIT_EXPENSE', id, updates });

const setTextFilter = (text) => ({ type: 'SET_TEXT_FILTER', text });

const sortByDate = () => ({ type: 'SORT_BY_DATE' });

const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' });

const setStartDate = (startDate) => ({ type: 'SET_START_DATE', startDate });

const setEndDate = (endDate) => ({ type: 'SET_END_DATE', endDate });

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [ ...state, action.expense ];
    case 'REMOVE_EXPENSE': 
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => (expense.id === action.id) ? ({ ...expense, ...action.updates }) : expense);
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  } 
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = text.length === 0 || expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const ExpenseOne = store.dispatch(addExpense({
  description: 'coffee',
  amount: 200,
  createdAt: -21000,
}))

const ExpenseTwo = store.dispatch(addExpense({
  description: 'RENT',
  amount: 300,
  createdAt: -1000,
}))

// store.dispatch(removeExpense({ id: ExpenseOne.expense.id }));

// store.dispatch(editExpense(ExpenseTwo.expense.id, { amount: 12000 }));

// store.dispatch(setTextFilter('rent'));


store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(2000));
// store.dispatch(setEndDate());

store.dispatch(setTextFilter('e'));
