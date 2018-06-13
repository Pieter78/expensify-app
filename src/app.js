import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
  description: 'Rent',
  amount: 100,
  createdAt: 1000,
}));

store.dispatch(addExpense({
  description: 'Water bill',
  amount: 200,
  createdAt: 0,
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 300,
  createdAt: -1000,
}));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
