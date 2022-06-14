import {
  ADD_ALL_USERS,
  ADD_ALL_DISHES,
  LOG_OUT_USER,
  LOG_IN_USER,
} from '../actions';

const initialUserDishesState = {
  usersList: [],
  dishesList: [],
  isLoggedIn: true,
  currentUserId: 4,
  userPreferences: [
    {
      1: {
        rank1: 12,
        rank2: 6,
        rank3: 25,
      },
    },
    {
      2: {
        rank1: 6,
        rank2: 19,
        rank3: 4,
      },
    },
    {
      3: {
        rank1: 16,
        rank2: 9,
        rank3: 4,
      },
    },
    {
      4: {
        rank1: 9,
        rank2: 4,
        rank3: 1,
      },
    },
    {
      5: {
        rank1: 1,
        rank2: 12,
        rank3: 6,
      },
    },
  ],
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
    case LOG_IN_USER:
      //   console.log('ACTION', action);
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
