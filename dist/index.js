"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted");
});
