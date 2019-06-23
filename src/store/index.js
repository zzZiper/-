import { createStore, combineReducers } from 'redux';
import home from '@/views/home/store';
import user from '@/views/user/store';
import member from '@/views/user/Member/store';

const reducer = combineReducers({
  home,
  user,
  member
});

const store = createStore(reducer);

export default store;