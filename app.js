const addTodoForm = document.querySelector(".addTodo");
const addTodoInput = document.querySelector(".addTodoInput");
const addTodoButton = document.querySelector(".addTodoButton");

const section = document.querySelector("section");
const todoTemplate = document.querySelector("template");

addTodoForm.addEventListener("submit", e => {
  e.preventDefault();

  const newTodo = todoTemplate.content.cloneNode(true);
  const todoItem = newTodo.querySelector(".todoItem");
  const todoText = newTodo.querySelector(".todoText");
  const todoCheckbox = newTodo.querySelector(".todoCheckbox");
  const todoButton = newTodo.querySelector(".todoDeleteButton");


  todoItem.setAttribute("id", Date.now());
  todoText.value = addTodoInput.value;
 

  section.appendChild(newTodo);
   todoButton.id = todoItem.id;
  addTodoInput.value = "";
  todoButton.addEventListener('click', function() {
    if(todoButton.id === todoItem.id ){
      todoItem.remove();
    }
    
  });
});

addTodoInput.addEventListener("input", () => {
  if (addTodoInput.value.length > 0) {
    addTodoButton.disabled = false;
  } else {
    addTodoButton.disabled = true;
  }
});

