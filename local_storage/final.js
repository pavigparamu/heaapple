const btn = document.getElementById('btn');
const input = document.getElementById('input');
const lists = document.getElementsByClassName('to-do-list'); // list
const todoList = document.getElementById('todo-list'); // left
const completed = document.getElementById('completed'); // right
let todos = [];

btn.addEventListener('click',() => {
    const value = input.value;
    const idGet = Math.floor(Math.random() * 100);
    if(value === ''){
        const error = document.getElementById('error');
        error.innerText = 'Please Enter Task Name';
    }
    else{
        const object = {
          id : idGet,
          task_name : value,
          created_time : new Date().getTime(),
          complete_time : null,
          checked : false,
        };
        input.value = '';
        error.innerText = '';
        todos.push(object);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    console.log(todos);
});

window.onload = () => {
    todos = Object.keys(localStorage).length;
    displayTasks();
};

const displayTasks = () => {
}