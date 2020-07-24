import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

// state = reducer(state, action)
// notify the subscribers

// to prevent memory leaks
const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(bugAdded('Bug 1'));
store.dispatch(bugResolved(1));

// UI can unsbscribe from state change of store
unsubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState());
