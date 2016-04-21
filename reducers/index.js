import { FILTERS, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actions'
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
      })
    default:
      return state
  }
}

function visibilityFilterReducer(state = FILTERS.SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const rootReducer = combineReducers({
    visibilityFilterReducer,
    todosReducer
})

export default rootReducer
