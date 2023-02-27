"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.querySelector("form");
const list = document.getElementById("todoList"); /*asserting is not a good idea here,
as the list initially will be empty */
const readTodos = () => {
    const todoJSON = localStorage.getItem("todos");
    if (todoJSON === null)
        return [];
    return JSON.parse(todoJSON);
};
const renderTodo = (newTodo) => {
    const newLI = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    newLI.append(newTodo.text, checkBox);
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
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
});
