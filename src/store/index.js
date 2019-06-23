import { createStore, combineReducers } from 'redux';
import home from '@/views/home/store';
import user from '@/views/user/store';

const reducer = combineReducers({
  home,
  user
});

const store = createStore(reducer);

export default store;