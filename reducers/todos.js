import { FILTERS, ADD_TODO } from './actions'

const initialState = {
  visibilityFilter: FILTERS.SHOW_ALL,
  todos: []
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.text]
    default:
      return state
  }
}
