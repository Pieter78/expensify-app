import moment from 'moment';

export default [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0,
}, {
  id: '2',
  description: 'Pencils',
  note: '',
  amount: 3500,
  createdAt: moment(0).subtract(4, 'day').valueOf(),
}, {
  id: '3',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).add(4, 'day').valueOf(),
}];
