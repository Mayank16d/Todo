export const todoFinished = (todo, isFinished)=>({type: 'finish_todo',payload:{todo, isFinished}})
export const deleteTodo = (todo)=>({type: 'delete_todo',payload:{todo}});
export const editTodo =(todo,todoText)=>({type: 'edit_todo',payload:{todo,todoText}});
export const addTodo =(todoText)=>({type: 'add_todo',payload:{todoText}})