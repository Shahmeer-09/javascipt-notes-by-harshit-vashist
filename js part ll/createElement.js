const todoliItem = document.createElement("li");
todoliItem.textContent = "How are you";
// const todoTextNode = document.createTextNode("howw are you");
const todoList  = document.querySelector(".todo-list");
// const todo1  = document.querySelector(".todo-list li");
// todoList.remove()
// todoliItem.append(todoTextNode);
const li2 = todoliItem.cloneNode(true)
todoList.prepend(li2);
todoList.append(todoliItem);
// todoList.prepend(todoliItem);
// const after =   todoList.after(todoliItem);
// const before =   todoList.before(todoliItem);
// todoliItem.classList.add("todo-list")
// todoliItem.classList.add("todo-after-before")