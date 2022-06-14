import {
  ADD_ALL_USERS,
  ADD_ALL_DISHES,
  LOG_OUT_USER,
  LOG_IN_USER,
} from '../actions';

const initialUserDishesState = {
  usersList: [],
  dishesList: [],
  isLoggedIn: false,
  currentUserId: 0,
};

export default function dishPoll(state = initialUserDishesState, action) {
  switch (action.type) {
    case ADD_ALL_USERS:
      //   console.log('ACTION', action);
      return {
        ...state,
        usersList: action.allUsers,
      };
    case ADD_ALL_DISHES:
      //   console.log('ACTION', action);
      return {
        ...state,
        dishesList: action.allDishes,
      };
    case LOG_OUT_USER:
      console.log('ACTION', action);
      return {
        ...state,
        isLoggedIn: false,
        currentUserId: 0,
      };
    case LOG_IN_USER:
      console.log('ACTION', action);
      return {
        ...state,
        isLoggedIn: true,
        currentUserId: action.userId,
      };
    default:
      //   console.log('ACTION', action);
      return state;
  }
}
