import { FILTERS, ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './actions'

const initialState = {
  visibilityFilter: FILTERS.SHOW_ALL,
  todos: []
}

let nextTodoId = 1

function todosReducer(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        { text: action.text, completed: false, id: nextTodoId++ }
      ]
    case COMPLETE_TODO:
      return state.map((todo) => {
        return todo.id === action.id ?
          Object.assign({}, todo, { completed: true }) : todo
      })
    case DELETE_TODO:
      return state.filter((todo) => {
          return todo.id !== action.id
        })
      })
  }
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
    case COMPLETE_TODO:
    case DELETE_TODO:
      return Object.assign({}, state, {
        todos: todosReducer(state.todos, action)
        ]
      })

    default:
      return state
  }
}
