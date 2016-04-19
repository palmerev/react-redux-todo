import React from 'react'
import { connect } from 'react-redux'

const Main = ({todos}) => {
  return (
    <div>
      <h1>React-Redux Todo</h1>
      {todos.map(todo => <p key={todo}>{todo}</p>)}
    </div>
  )
}

function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(Main)
