import React,{useState} from 'react'
import TodoList from './todo/todolist/TodoList'
import Form from './form/Form';
import "./GlobalStyles.css";
const App = () => {
  return (
    <div>
      <Form />
      <TodoList />
    </div>
  )
}

export default App