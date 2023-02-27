type Todo = {
    text: string, 
    isCompleted: boolean
}
const todos: Todo[]=[]
const btn  = document.getElementById("btn")!
const input  = document.getElementById("todoInput")! as HTMLInputElement
const form  = document.querySelector("form")!
const list = document.getElementById("todoList") /*asserting is not a good idea here, 
as the list initially will be empty */

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const newTodo: Todo = {
        text: input.value,
        isCompleted: false
    }
    todos.push(newTodo)
    renderTodo(newTodo)
    input.value=""
})

const renderTodo = (newTodo: Todo)=>{
    const newLI = document.createElement("li")
    const checkList = document.createElement("input")
    checkList.type = "checkbox"
    newLI.append(newTodo.text, checkList)
    list?.append(newLI)//optional chaining necessary
}