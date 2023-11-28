const searchInput = document.querySelector(".search-todo")
const addInput = document.querySelector(".input-todo")
const addButton = document.querySelector(".add-button")
const clearButton = document.querySelector(".clear-button")
const todosWrapper = document.querySelector(".todos-wrapper")
const infoWrapper = document.querySelector(".info-wrapper")
const emptyWrapper = document.querySelector(".empty-wrapper")

let todoAry = [];

runEvents();

function runEvents() {
    addButton.addEventListener("click", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    todosWrapper.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", clearAllTodos);
    searchInput.addEventListener("keyup", searches);
}

function pageLoaded() {
    checkStorage();
    todoAry.forEach((todo) => {
        addTodoToUI(todo)
    });
    checkEmpty();
}

function searches(e) {
    const searchesValue = e.target.value.toLowerCase().trim();
    const todoList = document.querySelectorAll(".todo-text")

    if (todoList.length > 0) {
        todoList.forEach((todoEl) => {
            if (todoEl.textContent.toLowerCase().trim().includes(searchesValue)) {
                todoEl.parentElement.setAttribute("style", "display: flex;")
            } else {
                todoEl.parentElement.setAttribute("style", "display: none;")
            }
        });
    } else {
        showAlert(2, "Todo List Is Empty")
    }

}

function addTodo() {
    const addText = addInput.value.trim();
    if (addText === null || addText === "") {
        showAlert(2, "Input Is Empty")
    } else {
        addTodoToUI(addText);
        addTodoToStorage(addText);
        showAlert(1, "Todo Added")
    }
    checkEmpty();
}

function addTodoToUI(todoName) {
    const div = document.createElement("div")
    div.className = "todo-row"

    const h3 = document.createElement("h3")
    h3.textContent = todoName
    h3.className = "todo-text"

    const i = document.createElement("i")
    i.className = "fa-regular fa-circle-xmark fa-xl"

    div.appendChild(h3)
    div.appendChild(i)

    todosWrapper.appendChild(div)
    addInput.value = ""
}

function addTodoToStorage(addText) {
    checkStorage();
    todoAry.push(addText)
    localStorage.setItem("todos", JSON.stringify(todoAry))
}

function removeTodoToUI(e) {
    if (e.target.className === "fa-regular fa-circle-xmark fa-xl") {
        const todo = e.target.parentElement;
        removeTodoToStorage(todo.textContent);
        todo.remove();
        showAlert(3, "Todo Deleted")
    }
    checkEmpty();
}

function removeTodoToStorage(removeTodo) {
    checkStorage();
    todoAry.forEach((todo, index) => {
        if (removeTodo === todo) {
            todoAry.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todoAry));
}

function clearAllTodos() {
    checkStorage();
    if (localStorage.getItem("todos") === "[]") {
        showAlert(2, "Todo List Is Empty")
    } else {
        const todoList = document.querySelectorAll(".todo-text")
        if (todoList.length > 0) {
            todoList.forEach((todoEl) => {
                todoEl.parentElement.remove()
            })
        }
        todoAry = [];
        localStorage.setItem("todos", JSON.stringify(todoAry));
    }
    checkEmpty();
}

function checkStorage() {
    if (localStorage.getItem("todos") === "[]") {
        todoAry = [];
    } else {
        todoAry = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, message) {
    let color = "";
    if (type === 1) {
        color = "green"
    } else if (type === 2) {
        color = "orange"
    } else {
        color = "red"
    }

    const div = document.createElement("div")
    div.className = `info ${color}`

    const h4 = document.createElement("h4")
    h4.textContent = message

    div.appendChild(h4)
    infoWrapper.appendChild(div)

    setTimeout(() => {
        div.remove();
    }, 2000);
}

function checkEmpty() {
    if (localStorage.getItem("todos") === "[]") {
        const h3 = document.createElement("h3")
        h3.textContent = "List Is Empty | Add Todo"
        const div = document.createElement("div")
        div.className = "empty"
        div.appendChild(h3)
        emptyWrapper.appendChild(div)
    } else (
        emptyWrapper.innerHTML = ""
    )
}
