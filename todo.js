// ===== TODO MODULE =====
let todos = [];

function loadTodos() {
  const stored = localStorage.getItem('dc_todos');
  todos = stored ? JSON.parse(stored) : [];
}

function saveTodos() {
  localStorage.setItem('dc_todos', JSON.stringify(todos));
}

function addTodo(title, priority, dueDate) {
  todos.push({ id: Date.now(), title, priority: priority || 'normal', dueDate: dueDate || new Date().toISOString().split('T')[0], completed: false, createdAt: new Date().toISOString() });
  saveTodos();
}

function toggleTodo(id) {
  const t = todos.find(x => x.id === id);
  if (t) { t.completed = !t.completed; saveTodos(); }
}

function deleteTodo(id) {
  todos = todos.filter(x => x.id !== id);
  saveTodos();
}

window.todos = todos;
window.loadTodos = loadTodos;
window.saveTodos = saveTodos;
window.addTodo = addTodo;
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;
