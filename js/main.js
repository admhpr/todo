//v9

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
    // push a todo object into the todos array ^^^ this models what a todo item looks like
    this.todos.push( {
      todoText: todoText,
      completed: false
    } );
    this.displayTodos();
  },

  changeTodo: function ( pos, todoText ) {
    // takes a position in that array and changes the text
    this.todos[ pos ].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function ( pos ) {
    // takes a position in the array and spices it from the array from the position is is given
    this.todos.splice( pos, 1 );
    this.displayTodos();
  },

  toggleCompleted: function ( pos ) {
    // toggles the completed property form true <--> false
    var todo = this.todos[ pos ];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function () {
    // toggles all items in the todo array
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //get completedTodos
    for ( var i = 0; i < totalTodos; i++ ) {
      if ( this.todos[ i ].completed === true ) {
        completedTodos++;
      }
    }

    //Case 1: if everthing the completedTodos is equal to the array length make everything false.
    if ( completedTodos === totalTodos ) {
      for ( var i = 0; i < totalTodos; i++ ) {
        this.todos[ i ].completed = false;
      }
    } else { //Case 2: all todos are not completed make everthing completed.
      for ( var i = 0; i < totalTodos; i++ ) {
        this.todos[ i ].completed = true;
      }
    }
    this.displayTodos();
  }
};

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
    toggleCompletedPos.value = ''; // clears value in form field
  }
};

var view = {
  displayTodos: function () {
    var todoUl = document.querySelector( 'ul' );
    todoUl.innerHTML = ''; //clears the ul
    for ( var i = 0; i < todoList.todos.length; i++ ) {
      var todoLi = document.createElement( 'li' );
      todoUl.appendChild( todoLi );
    }
  }
};
