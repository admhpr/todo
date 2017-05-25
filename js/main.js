//v3

//a place to store to todos and it's methods

var todoList = {
  todos: [ 'item1', 'item2', 'item3' ],
  displayTodos: function () {
    console.log( 'My todos:', this.todos );
  },
  addTodo: function ( todo ) {
    this.todos.push( todo );
    this.displayTodos();
  },
  changeTodo: function ( pos, newValue ) {
    this.todos[ pos ] = newValue;
    this.displayTodos();
  },
  deleteTodo: function ( pos ) {
    this.todos.splice( pos, 1 );
    this.displayTodos();
  }
};

//now using methods on an object
todoList.displayTodos();

todoList.addTodo( 'new todo' );
todoList.addTodo( 'another todo' );

todoList.changeTodo( 0, 'changed' );
todoList.changeTodo( 0, 'changed again' );

//delete the first item
todoList.deleteTodo( 0 );
todoList.deleteTodo( 0 );
todoList.deleteTodo( 0 );
todoList.deleteTodo( 0 );
