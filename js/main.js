//v9

//a todo list object a place to store to todos and it's methods

var todoList = {

  todos: [],

  addTodo: function ( todoText ) {
    // push a todo object into the todos array ^^^ this models what a todo item looks like
    this.todos.push( {
      todoText: todoText,
      completed: false
    } );

  },

  changeTodo: function ( pos, todoText ) {
    // takes a position in that array and changes the text
    this.todos[ pos ].todoText = todoText;

  },

  deleteTodo: function ( pos ) {
    // takes a position in the array and spices it from the array from the position is is given
    this.todos.splice( pos, 1 );

  },

  toggleCompleted: function ( pos ) {
    // toggles the completed property form true <--> false
    var todo = this.todos[ pos ];
    todo.completed = !todo.completed;

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

  }
};

//handler object

var handlers = {
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function () {
    var addTodo = document.getElementById( 'addTodo' );
    todoList.addTodo( addTodo.value );
    addTodo.value = '';
    view.displayTodos();
  },
  changeTodo: function () {
    var changeTodoPos = document.getElementById( 'changeTodoPos' );
    var changeTodoText = document.getElementById( 'changeTodoText' );
    todoList.changeTodo( changeTodoPos.valueAsNumber, changeTodoText.value );
    changeTodoPos.value = '';
    changeTodoText.value = '';
    view.displayTodos();
  },
  deleteTodo: function () {
    var deleteTodoPos = document.getElementById( 'deleteTodoPos' );
    todoList.deleteTodo( deleteTodoPos.valueAsNumber );
    deleteTodoPos.value = '';
    view.displayTodos();
  },
  toggleCompleted: function () {
    var toggleCompletedPos = document.getElementById( 'toggleCompletedPos' );
    todoList.toggleCompleted( toggleCompletedPos.valueAsNumber );
    toggleCompletedPos.value = ''; // clears value in form field
    view.displayTodos();
  }
};

var view = {
  displayTodos: function () {
    var todoUl = document.querySelector( 'ul' );
    todoUl.innerHTML = ''; //clears the ul
    for ( var i = 0; i < todoList.todos.length; i++ ) {
      var todoLi = document.createElement( 'li' );
      var todo = todoList.todos[ i ];
      var todoTextWithCompletion = '';

      // add completed data
      if ( todo.completed === true ) {
        todoTextWithCompletion = '(x) ' + todo.todoText
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText
      }

      todoLi.textContent = todoTextWithCompletion;
      todoUl.appendChild( todoLi );
    }
  }
};
