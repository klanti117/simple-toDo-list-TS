const btn  = document.getElementById("btn")!
const input  = document.getElementById("todoInput")! as HTMLInputElement

btn.addEventListener("click",()=>{
    console.log(input.value)
    input.value=""
})
