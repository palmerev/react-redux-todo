import { FILTERS, ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_VISIBILITY_FILTER } from '../actions'
import { combineReducers } from 'redux'

let nextTodoId = 1

function todosReducer(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        { text: action.text, completed: false, id: nextTodoId++ }
      ]
    case TOGGLE_TODO:
      return state.map((todo) => {
        return todo.id === action.id ?
          Object.assign({}, todo, { completed: !todo.completed }) : todo
      })
    case DELETE_TODO:
      return state.filter((todo) => {
          return todo.id !== action.id
        })
    default:
      return state
  }
}

function visibilityFilterReducer(state = FILTERS.SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.visibilityFilter
    default:
      return state
  }
}

const rootReducer = combineReducers({
    visibilityFilter: visibilityFilterReducer,
    todos: todosReducer
})

export default rootReducer
