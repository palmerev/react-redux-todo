const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const MARK_COMPLETE = 'MARK_COMPLETE'

export default {
  addTodo: function (text) {
    type: ADD_TODO,
    text,
  },
  deleteTodo: function (index) {
    type: DELETE_TODO,
    index,
  },
  markComplete: function (index) {
    type: MARK_COMPLETE,
    index,
  },
}
