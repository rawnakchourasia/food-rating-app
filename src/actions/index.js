// ACTION TYPES
export const ADD_ALL_USERS = 'ADD_ALL_USERS';
export const ADD_ALL_DISHES = 'ADD_ALL_DISHES';

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
