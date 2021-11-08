import './App.css';
import { useState, useEffect } from 'react';
import Inputbar from './Components/Inputbar';
import Todolist from './Components/Todolist';

function App() {

  let todosArr;
  if(localStorage.getItem("todos")===null){
    todosArr = [];
  } else {
    todosArr = JSON.parse(localStorage.getItem("todos"));
  }
  
  const [todos, setTodos] = useState(todosArr);

  const addTodo = (todo) => {
    // console.log(todo);
    let id;
    todos.length===0? id=0 : id=todos[todos.length-1].id + 1;
    const newTodo = {
      id: id,
      title: todo
    }
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo)=>{
      return todo.id !== id;
    }));
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <>
      {/* search container */}
      <div className="md:w-1/2 mx-auto mt-20 text-center">
        <h1 className="font-medium text-3xl">React Todos</h1>
        <Inputbar addTodo={addTodo}/>

        <Todolist todos={todos} deleteTodo={deleteTodo}/>
        </div>
    </>
  );
}

export default App;
