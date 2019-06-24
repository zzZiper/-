import { createStore, combineReducers } from 'redux';
import SilkBag from '@/views/silkbag/store';
import user from '@/views/user/store';
import member from '@/views/user/Member/store';
import cookbook from '@/views/silkbag/store';

const reducer = combineReducers({
  SilkBag,
  user,
  member,
  cookbook
});

const store = createStore(reducer);

export default store;