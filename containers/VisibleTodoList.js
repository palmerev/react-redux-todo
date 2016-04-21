import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import actions from '../actions'

const { markComplete } = actions
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      console.log("getVisibleTodos defaulted")
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    // React prop: Redux state
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // React prop: Redux dispatch
    onTodoClick: (id) => {
      dispatch(markComplete(id))
    }
  }
}

const VisibleTodoList = connect (
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
