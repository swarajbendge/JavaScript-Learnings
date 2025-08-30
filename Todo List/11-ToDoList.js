const todoList = [{
        name : 'make dinner',
        dueDate : '2025-30-08'}, {
        name : 'wash dishes',
        dueDate : '2025-08-30'}
    ];
renderTodoList();
function renderTodoList() {

    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const HTML = `
        <div>${name}</div>
        <div>${dueDate}</div>
            <button onclick = "
                todoList.splice(${i}, 1);
                renderTodoList();
            " class = "delete-todo-button">Delete</button>
        `;
        todoListHTML += HTML;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name : name,
        dueDate : dueDate}
    );

    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}

// function deleteTodo() {

// }