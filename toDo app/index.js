
const todoapp = document.querySelector(".todo-app");
const todoInput = document.querySelector(".todo-app-input")
const todoBtn = document.querySelector(".todo-app-btn");
const todoList = document.querySelector(".todo-app-list");
const errorMessage = document.querySelector("#message");


todoBtn.addEventListener("click", function addTodoList(event){

    if (todoInput.value === ""){
        window.alert("please fill the form first")
    }else {
    // adding div under todo app list

const todonewDiv = document.createElement("div");
todonewDiv.classList.add("todo-app-item-list");


const todoNewInput = document.createElement("span");
todoNewInput.innerHTML = '<i class="bi bi-app"></i>'
todonewDiv.appendChild(todoNewInput)


const todoNewp = document.createElement("p");
todoNewp.innerHTML = todoInput.value;
todonewDiv.appendChild(todoNewp)
saveToLocal(todoInput.value)

const todoNewAction = document.createElement("span")
todoNewAction.innerHTML = '<i class="bi bi-trash3-fill close all"></i>'
todonewDiv.appendChild(todoNewAction)

todoList.appendChild(todonewDiv)

todoInput.value = "";
    }
});













todoList.addEventListener("click", function todoAction(event){
    console.log(event)
    const todoItem = event.target
    // class list[1] in bi bi-app stands for bi-app and classlist[1] means it checks the class of todoItem and picks 1no array as it is bi-app if classlist[0] it will be bi only 
    if(todoItem.classList[1] === "bi-app"){
        todoItem.classList.toggle('bi-check-square')
        const todoComplete = todoItem.parentElement
        const todoCompleted = todoComplete.parentElement
        todoCompleted.classList.toggle('completed')
    }
    if(todoItem.classList[3] === "all"){
      const todoDeleteItem = todoItem.parentElement
      const todoDeleteItemTask = todoDeleteItem.parentElement
      todoDeleteItemTask.remove();
      deleteTodoLocal(todoDeleteItemTask);
    }
});

document.addEventListener("DOMContentLoaded", function getTodoLocal(todoItem){
    let todo;
     if (localStorage.getItem('todo') === null){
         todo = [];
 
     }else{
         todo = JSON.parse(localStorage.getItem('todo'));
     }
 
     todo.forEach(todo => {
         const todonewDiv = document.createElement("div");
 todonewDiv.classList.add("todo-app-item-list");
 
 
 const todoNewInput = document.createElement("span");
 todoNewInput.innerHTML = '<i class="bi bi-app"></i>'
 todonewDiv.appendChild(todoNewInput)
 
 
 const todoNewp = document.createElement("p");
 todoNewp.innerHTML = todo// get value from local storage
 todonewDiv.appendChild(todoNewp)
 
 
 const todoNewAction = document.createElement("span")
 todoNewAction.innerHTML = '<i class="bi bi-trash3-fill close all"></i>'
 todonewDiv.appendChild(todoNewAction)
 
 todoList.appendChild(todonewDiv)
 
 todoInput.value = "";
     });
 })
 

function saveToLocal (todoItem){
    let todo;
    if (localStorage.getItem('todo') === null){
        todo = [];

    }else{
        todo = JSON.parse(localStorage.getItem('todo'));
    }


    todo.push(todoItem);
localStorage.setItem("todo", JSON.stringify(todo))
    
}



function deleteTodoLocal(todoDelete){
    let todo;
    if (localStorage.getItem('todo') === null){
        todo = [];

    }else{
        todo = JSON.parse(localStorage.getItem('todo'));
    }
  const todoDeleteIndex = todoDelete.children[1].innerHTML
  todo.splice(todo.indexOf(todoDeleteIndex), 1)

  localStorage.setItem("todo", JSON.stringify(todo))
}




