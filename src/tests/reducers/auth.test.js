import authReducer from '../../reducers/auth';

test('should add uid on login', () => {
  const action = {
    type: 'LOGIN',
    uid: '12345',
  };

  const state = authReducer(undefined, action);

  expect(state.uid).toBe('12345');
});

test('should remove uid on logout', () => {
  const action = {
    type: 'Logout',
  };

  const state = authReducer(undefined, action);

  expect(state).toEqual({});
});
