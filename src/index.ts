const btn  = document.getElementById("btn")!
const input  = document.getElementById("todoInput")! as HTMLInputElement
const form  = document.querySelector("form")!
const list = document.getElementById("todoList") /*asserting is not a good idea here, 
as the list initially will be empty */

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const newItem = input.value
    const newLI = document.createElement("li")
    newLI.append(newItem)
    list?.append(newLI)//optional chaining necessary
    input.value=""
})

