//create a program where you can create a todo list
const todoContainer = document.getElementById("todo-container")
const todoTemplate = document.getElementById("todo-template")
const createTodoButton = document.getElementById("create-todo-button")
todoTemplate.style = "hidden"
function createTodo(todoObject, parent){
	const newTodo = todoObject.cloneNode(true)
	newTodo.id = ""
	newTodo.childNodes[1].childNodes[3].addEventListener("click", () => {
		newTodo.remove()
		console.log("removed todo")

	})
	parent.appendChild(newTodo)
	console.log("new todo")
}
console.log(todoTemplate.childNodes[1].childNodes)
todoTemplate.remove()
createTodoButton.addEventListener("click", () => {createTodo(todoTemplate, todoContainer)})
