export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

export default {
  addTodo: function (text) {
    return {
      type: ADD_TODO,
      text,
    }
  },
  deleteTodo: function (id) {
    return {
      type: DELETE_TODO,
      id,
    }
  },
  toggleTodo: function (id) {
    return {
      type: TOGGLE_TODO,
      id,
    }
  },
  setVisibilityFilter: function (filter) {
    return {
      type: SET_VISIBILITY_FILTER,
      visibilityFilter: filter,
    }
  }
}
