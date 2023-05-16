const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-button")
const todoResult = document.querySelector(".todo-result")

function addTodo(e){
    e.preventDefault()

    const todoDiv = document.createElement("div")
    todoDiv.classList.add('todo-item')

    const newTodo = document.createElement('h3')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-title')
    todoDiv.appendChild(newTodo)

    todoInput.value = ''

    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>'
    todoDiv.appendChild(completeBtn)

    const removeBtn = document.createElement('button')
    removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todoDiv.appendChild(removeBtn)
    todoResult.appendChild(todoDiv)
}

function toggleTodo(e){
    const item = e.target
    if (item.classList[2] == 'fa-check'){
        const btndiv = item.parentElement.parentElement
        btndiv.childNodes[0].classList.toggle('completed')
    }

    if (item.classList[1] == 'fa-trash'){
        const btndiv = item.parentElement.parentElement
        btndiv.classList.toggle('remove')
    }
}




todoBtn.addEventListener('click',addTodo)
todoResult.addEventListener('click',toggleTodo)
