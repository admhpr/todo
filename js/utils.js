//functions are just recipes (steps to achieve a goal)
// these are no longer used in main.js but as methods on a todoList object.

function displayTodos() {
  console.log( 'My todos:', todos );
}

function addTodo( todo ) {
  todos.push( todo );
  displayTodos();
}

function changeTodo( pos, newValue ) {
  todos[ pos ] = newValue;
  displayTodos();
}

function deleteTodo( pos ) {
  todos.splice( pos, 1 );
  displayTodos();
}
