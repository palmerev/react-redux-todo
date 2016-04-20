import { FILTERS, ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './actions'

const initialState = {
  visibilityFilter: FILTERS.SHOW_ALL,
  todos: []
}

let nextTodoId = 1

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign( {}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          { text: action.text, completed: false, id: nextTodoId++ }
        ]
      })
    case COMPLETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.id === action.id ?
            Object.assign({}, todo, { completed: true }) : todo
        })
        ]
      })
    case DELETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id
        })
      })
    default:
      return state
  }
}
