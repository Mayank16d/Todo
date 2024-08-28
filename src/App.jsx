
import { useContext, useReducer, useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo.jsx'
import TodoList from './components/TodoList/TodoList.jsx'
import TodoContext from './context/TodoContext.js'
import TodoDispatchContext from './context/TodoDispatchContext.js';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addTodo,deleteTodo,editTodo,todoFinished} from './actions/todoActions.js'
// import todoReducer from './reducers/todoReducer.js';


function App() {
   
  // const [list,dispatch] = useReducer(todoReducer,[]);  
  const dispatch = useDispatch();
  const actions = bindActionCreators({addTodo,deleteTodo,editTodo,todoFinished}, dispatch);
  return (
    <>
          <p>hello</p>
          <AddTodo addTodo = {actions.addTodo} />
          <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished} />
    </>
  )
}

export default App
