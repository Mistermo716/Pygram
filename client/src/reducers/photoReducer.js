import { SUBMIT_PHOTO, GET_PHOTOS } from '../actions/index';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  items: [],
  item: {},
  submitted: false,
};

const formsReducer = (state = initialState, action) => {
  console.log('photo reducer submit called');
  switch (action.type) {
    case SUBMIT_PHOTO: {
      state = { ...state, item: action.payload, submitted: true };
      break;
    }
    default: {
      return state;
    }
  }
  return state;
};
const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      console.log('reducer fetching');
      return {
        ...state,
        items: action.payload,
      };
    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  form: formsReducer,
  photos: photosReducer,
});

const middleware = applyMiddleware(thunk);

export default createStore(reducers, initialState, middleware);
