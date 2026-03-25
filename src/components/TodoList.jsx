function TodoList() {
  const todos = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Practice useState" },
    { id: 3, task: "Build a Todo App" },
    { id: 4, task: "Review JSX" }
  ];

  return (
    <div className="point-box">
      <h2>Todo List</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.task} <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default TodoList;