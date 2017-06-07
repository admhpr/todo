//v8

//a todo list object a place to store to todos and it's methods

var todoList = {

  todos: [],

  displayTodos: function () {
    console.log( 'My Todos:' );

    var empty = this.todos.length === 0;
    console.log( empty ? "the todo list is empty" : "there are things to be done" );

    for ( var i = 0; i < this.todos.length; i++ ) {
      //checking for completed property
      if ( this.todos[ i ].completed === true ) {
        console.log( '(x)', this.todos[ i ].todoText );
      } else {
        console.log( '()', this.todos[ i ].todoText );
      }
    }
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
  },

  toggleAll: function () {

    var totalTodos = this.todos.length;

    var completedTodos = 0;

    //get completedTodos
    for ( var i = 0; i < totalTodos; i++ ) {
      if ( this.todos[ i ].completed === true ) {
        completedTodos++;
      }
    }

    //Case 1: if everthing true, make everything false.
    if ( completedTodos === totalTodos ) {
      for ( var i = 0; i < totalTodos; i++ ) {
        this.todos[ i ].completed = false;
      }
    } else { //Case 2: make them true
      for ( var i = 0; i < totalTodos; i++ ) {
        this.todos[ i ].completed = true;
      }
    }
    this.displayTodos();
  }
};

// //now using methods on an object
// todoList.displayTodos();
// todoList.addTodo( 'my first todo' );
// todoList.toggleCompleted( 0 ); // true first item will print with an (x)

// //seed data
// for ( var i = 2; i < 5; i++ ) {
//   todoList.addTodo( "item " + i );
// }
//
// todoList.toggleAll();

// we want to get access to the display todos button

//handler object

var handlers = {
  displayTodos: function () {
    todoList.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
  },
  addTodo: function () {
    var addTodo = document.getElementById( 'addTodo' );
    todoList.addTodo( addTodo.value );
    addTodo.value = '';
  },
  changeTodo: function () {
    var changeTodoPos = document.getElementById( 'changeTodoPos' );
    var changeTodoText = document.getElementById( 'changeTodoText' );
    todoList.changeTodo( changeTodoPos.valueAsNumber, changeTodoText.value );
    changeTodoPos.value = '';
    changeTodoText.value = '';
  },
  deleteTodo: function () {
    var deleteTodoPos = document.getElementById( 'deleteTodoPos' );
    todoList.deleteTodo( deleteTodoPos.valueAsNumber );
    deleteTodoPos.value = '';
  },
  toggleCompleted: function () {
    var toggleCompletedPos = document.getElementById( 'toggleCompletedPos' );
    todoList.toggleCompleted( toggleCompletedPos.valueAsNumber );
    toggleCompletedPos.value = '';
  }
};
