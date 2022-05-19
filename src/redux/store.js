import { createStore } from 'redux';
import ItemReducer from './StoreItem';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
    ItemReducer, 
    persistedState,
)

// const store = createStore(ItemReducer);
// console.log('manazx',localStorage.setItem('reduxState', JSON.stringify(store.getState())));

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    console.log('testing');
  })

export default store;