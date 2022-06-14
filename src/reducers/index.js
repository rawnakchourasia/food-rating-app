import { ADD_ALL_USERS, ADD_ALL_DISHES } from '../actions';

const initialUserDishesState = {
  usersList: [],
  dishesList: [],
  isLoggedIn: false,
  currentUserId: 0,
};

export default function dishPoll(state = initialUserDishesState, action) {
  switch (action.type) {
    case ADD_ALL_USERS:
      console.log('ACTION', action);
      return {
        ...state,
        usersList: action.allUsers,
      };
    case ADD_ALL_DISHES:
      console.log('ACTION', action);
      return {
        ...state,
        dishesList: action.allDishes,
      };
    default:
      console.log('ACTION', action);
      return state;
  }
}
