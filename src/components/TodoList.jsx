function TodoList() {
  const todos = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Practice useState" },
    { id: 3, task: "Build a Todo App" },
    { id: 4, task: "Review JSX" }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default TodoList;