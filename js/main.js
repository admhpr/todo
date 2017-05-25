//as basic as it gets.

//a place to store todos
var todos = [ 'item1', 'item2', 'item3' ];

//add
todos.push( 'item4' );

//delete
todos.splice( 0, 1 );

//check
console.log( todos );

//update
todos[ 0 ] = 'newItem1';

console.log( todos );
