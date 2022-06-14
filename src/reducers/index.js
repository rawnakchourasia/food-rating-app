import { ADD_ALL_USERS, ADD_ALL_DISHES, LOG_OUT_USER } from '../actions';

const initialUserDishesState = {
  usersList: [],
  dishesList: [],
  isLoggedIn: true,
  currentUserId: 2,
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
      //   console.log('ACTION', action);
      return {
        ...state,
        isLoggedIn: false,
        currentUserId: 0,
      };
    default:
      //   console.log('ACTION', action);
      return state;
  }
}
