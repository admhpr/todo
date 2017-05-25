//v4

//a place to store to todos and it's methods

var todoList = {
  todos: [],
  displayTodos: function () {
    console.log( 'My Todos:', this.todos );
  },
  addTodo: function ( todoText ) {
    this.todos.push( {
      todoText: todoText,
      completed: false
    } );
    this.displayTodos();
  },
  changeTodo: function ( pos, todoText ) {
    this.todos[ pos ].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function ( pos ) {
    this.todos.splice( pos, 1 );
    this.displayTodos();
  },
  toggleCompleted: function ( pos ) {
    var todo = this.todos[ pos ];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

//now using methods on an object
todoList.displayTodos();
//
todoList.addTodo( 'new todo' );
todoList.toggleCompleted( 0 );
// todoList.addTodo( 'another todo' );
//
// todoList.changeTodo( 0, 'changed' );
// todoList.changeTodo( 0, 'changed again' );
//
// //delete the first item
// todoList.deleteTodo( 0 );
// todoList.deleteTodo( 0 );
// todoList.deleteTodo( 0 );
// todoList.deleteTodo( 0 );
