"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.querySelector("form");
const list = document.getElementById("todoList"); /*asserting is not a good idea here,
as the list initially will be empty */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newItem = input.value;
    const newLI = document.createElement("li");
    const checkList = document.createElement("input");
    checkList.type = "checkbox";
    newLI.append(newItem, checkList);
    list === null || list === void 0 ? void 0 : list.append(newLI); //optional chaining necessary
    input.value = "";
});
