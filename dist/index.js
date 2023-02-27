"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.querySelector("form");
const list = document.getElementById("todoList"); /*asserting is not a good idea here,
as the list initially will be empty */
const saveTodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
const readTodos = () => {
    const todoJSON = localStorage.getItem("todos");
    if (todoJSON === null)
        return [];
    return JSON.parse(todoJSON);
};
const renderTodo = (newTodo) => {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = newTodo.isCompleted;
    checkbox.addEventListener("change", () => {
        // console.log("checked")
        newTodo.isCompleted = checkbox.checked;
        saveTodo();
    });
    newLI.append(newTodo.text, checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI); //optional chaining necessary
};
const todos = readTodos();
todos.forEach(renderTodo);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        isCompleted: false
    };
    todos.push(newTodo);
    renderTodo(newTodo);
    saveTodo();
    input.value = "";
});
