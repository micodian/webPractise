import React, { useState } from 'react';//usecase hook
import TodoList from './TodoList'

function App() {
  const [todos,setTodos]=useState(['Todo1','Todo2'])//usecase returns an arrow 
  return(
    <>
    <TodoList todos = {todos} />
    < input type="text" />
    <button>Add Stuff</button>
    <button>Remove Stuff</button>
    <div>0 Left to do</div>
    </>
  )
}

export default App;
