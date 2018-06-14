

// 1. Create ExpensesSummary component

// Rendered by ExpensesDashboardPage
// Test with two snapshot tests

// Connected to store for:
import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = props => (
  <div>
    <p>test</p>
    {
      `You are viewing ${props.expenses.length} items for a total of ${numeral(props.total / 100).format('$0,0.00')}`
    }
  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters),
  total: expensesTotal(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpensesSummary);


// ExpensesCount
// ExpensesTotal

// Example
// Viewing 2 expenses, totalling $94.34
