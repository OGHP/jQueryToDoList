//REWRITING THE JS IN JQUERY

var todoForm = $('#todo-form');
var todoList = $('#todo-list');

$('#todoForm').click(function(event){ //NEED TO ADD 'CLICK'?
  event.preventDefault();


//GET INFO
  var todo = $(event.target).todoInput(value);


//BUILD CONTAINER

$('.container').html('li');
$('.container').html('p');
$('.container').html('button');
$('.clearDiv').html('div');

//REWRITE NOTES: 
//or is it: 

// var li = $('.container').html('li');
// var p = $('.container').html('p');
// var deleteButton = $('.container').html('button');
// var clearDiv = $('.clearDiv').html('div');

//REWRITE NOTES: or - is the var not needed. Like, is this above code redundant


//REWRITE NOTES
//*****NOT SURE WHAT TO DO HERE YET*****
//FILL CONTAINERS
  li.className = 'fadeIn';
  p.innerHTML = todo; //referencing the variable
  deleteButton.innerHTML = 'X';
  clearDiv.className = 'clearfix';


$('deleteButton').click(function (event) {
  $(event.target).remove(parentNode);

  });



//REWRITE NOTES
//*****NOT SURE WHAT TO DO HERE YET*****

  li.appendChild(p);
  li.appendChild(deleteButton);
  li.appendChild(clearDiv);

  todoList.appendChild(li);


  $(event.target).reset(todoInput.value = '');


//});