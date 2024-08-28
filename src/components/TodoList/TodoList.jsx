import { useContext, useState } from "react";
import Todo from "../Todo/Todo.jsx";
// import TodoContext from "../../context/TodoContext.js";
// import todoDispatchContext from "../../context/TodoDispatchContext.js";
import { useDispatch, useSelector } from "react-redux";
// import {deleteTodo, editTodo, todoFinished} from '../../actions/todoActions'


function TodoList({editTodo,deleteTodo,todoFinished}) {
    // const {list} = useContext(TodoContext);
    // const {dispatch} = useContext(todoDispatchContext);
    const list = useSelector((state)=> state.todo);
        // const dispatch = useDispatch();

    function onFinished(todo,isFinished){
        todoFinished(todo, isFinished);
    }
    function onDelete(todo){
        deleteTodo(todo);
    }
    function onEdit(todo, todoText){
        editTodo(todo,todoText);
    }


    return (
        <div>
            {list.length > 0 && list.map((todo) => 
                <Todo key={todo.id} 
                      todoData={todo.todoData} 
                      isFinished={todo.finished}
                      id={todo.id}
                      changeFinished ={(isFinished)=>onFinished(todo,isFinished)}
                      
                      onDelete ={()=>onDelete(todo)}

                      onEdit ={(todoText)=>onEdit(todo,todoText)}
                    />
            )}
        </div>
    );
}

export default TodoList;