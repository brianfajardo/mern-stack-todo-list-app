import React from 'react'

const Header = (props) => {
  const { todos, remainingTodos } = props
  return (
    <div>
      <h1>Todos</h1>
      {todos.length > 0
        ? <div>
            <p>Double click todo to mark as complete</p>
            <p>Remaining todos: {remainingTodos}</p>
          </div>
        : <p>Add a something to do.</p>
      }
    </div>
  )
}

export default Header