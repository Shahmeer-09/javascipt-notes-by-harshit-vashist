const todoList = document.querySelector(".todo-list");
const formTodo = document.querySelector(".form-todo")
const inputodo = document.querySelector(".form-todo input[type='text']")

formTodo.addEventListener("submit", (e)=>{
  e.preventDefault();
  const inputText = inputodo.value;
  const newLi = document.createElement("li");
  newLi.innerHTML = `<span class="text">${inputText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
    todoList.append(newLi);
  inputodo.value = "";
})

todoList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("done")){
        const spant = e.target.parentNode.previousElementSibling;
        spant.style.textDecoration = "line-through"
    }
    if (e.target.classList.contains("remove")) {
        const holeList =e.target.parentNode.parentNode;
        holeList.remove();
    }
})