export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const MARK_COMPLETE = 'MARK_COMPLETE'
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
  markComplete: function (id) {
    return {
      type: MARK_COMPLETE,
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
