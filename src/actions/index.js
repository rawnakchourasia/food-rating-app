// ACTION TYPES
export const ADD_ALL_USERS = 'ADD_ALL_USERS';
export const ADD_ALL_DISHES = 'ADD_ALL_DISHES';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const LOG_IN_USER = 'LOG_IN_USER';

// ACTION CREATORS
export function addAllUsers(allUsers) {
  return {
    type: ADD_ALL_USERS,
    allUsers: allUsers,
  };
}

export function addAllDishes(allDishes) {
  return {
    type: ADD_ALL_DISHES,
    allDishes: allDishes,
  };
}

export function logOutUser(userId) {
  return {
    type: LOG_OUT_USER,
    userId: userId,
  };
}

export function logInUser(userId) {
  return {
    type: LOG_IN_USER,
    userId: userId,
  };
}
