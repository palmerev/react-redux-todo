export default function todosReducer(state = ['Need moar code!'], action) {
  switch (action.type) {
    case 'addTodo':
      return [...state, action.todo]
    default:
      return state
  }
}
