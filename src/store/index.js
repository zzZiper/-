import { createStore, combineReducers } from 'redux';
import SilkBag from '@/views/silkbag/store';
import user from '@/views/user/store';
import member from '@/views/user/Member/store';
import cookbook from '@/views/silkbag/store';
import order from '@/views/user/Order/store';
import receiving from '@/views/user/Receiving/store';
import confirm from '@/views/user/Confirm/store';

const reducer = combineReducers({
  SilkBag,
  user,
  member,
  cookbook,
  order,
  receiving,
  confirm
});

const store = createStore(reducer);

export default store;