type Todo = {
    text: string, 
    isCompleted: boolean
}
const btn = document.getElementById("btn")!
const input = document.getElementById("todoInput")! as HTMLInputElement
const form = document.querySelector("form")!
const list = document.getElementById("todoList") /*asserting is not a good idea here, 
as the list initially will be empty */

const readTodos = () => {
    const todoJSON = localStorage.getItem("todos")
    if (todoJSON === null) return []
    return JSON.parse(todoJSON)
}

const renderTodo = (newTodo: Todo) => {
    const newLI = document.createElement("li")
    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    newLI.append(newTodo.text, checkBox)
    list?.append(newLI)//optional chaining necessary
}

const todos: Todo[] = readTodos()
todos.forEach(renderTodo)


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const newTodo: Todo = {
        text: input.value,
        isCompleted: false
    }
    
    todos.push(newTodo)
    renderTodo(newTodo)
    
    localStorage.setItem("todos", JSON.stringify(todos))
    input.value=""
})

