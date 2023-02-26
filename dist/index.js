"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
btn.addEventListener("click", () => {
    console.log(input.value);
});
