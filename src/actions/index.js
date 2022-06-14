// ACTION TYPES
export const ADD_ALL_USERS = 'ADD_ALL_USERS';
export const ADD_ALL_DISHES = 'ADD_ALL_DISHES';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const LOG_IN_USER = 'LOG_IN_USER';
export const REMOVE_ONE_DISH = 'REMOVE_ONE_DISH';
export const REMOVE_ALL_DISHES = 'REMOVE_ALL_DISHES';

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

export function removeOneDish(userPosnDish) {
  return {
    type: REMOVE_ONE_DISH,
    userPosnDish: userPosnDish,
  };
}

export function removeAllDishes(userId) {
  return {
    type: REMOVE_ALL_DISHES,
    userId: userId,
  };
}
