const btn = document.getElementById('btn');
const input = document.getElementById('input');
const lists = document.getElementsByClassName('to-do-list'); // list
const todoList = document.getElementById('todo-list'); // left
const completed = document.getElementById('completed'); // right
let todos = [];

// for(list of lists){

// }

window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    myFunction();
}

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

function myFunction(){
  const getVal = localStorage.getItem('todos');
  const parseVal = JSON.parse('todos');
  console.log(parseVal);

  
  
  const tasks = parseVal;
  tasks = tasks.sort();

  for (let key of tasks) {
    let classValue = "";

    //Get all values
    let taskInnerDiv = document.createElement("div");
    taskInnerDiv.classList.add("task");
    taskInnerDiv.setAttribute("id", key);
    taskInnerDiv.innerHTML = `<span id="taskname">${key.split("_")[1]}</span>`;
    //localstorage would store boolean as string so we parse it to boolean back
    let editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    if (!JSON.parse(value)) {
      editButton.style.visibility = "visible";
    } else {
      editButton.style.visibility = "hidden";
      taskInnerDiv.classList.add("completed");
    }
    taskInnerDiv.appendChild(editButton);
    taskInnerDiv.innerHTML += `<button class="delete"><i class="fa-solid fa-trash"></i></button>`;
    tasksDiv.appendChild(taskInnerDiv);
  }


}

// function addtodo(object){

//     // separate list
    
//     const mainList = document.createElement('li');
//     mainList.setAttribute('draggable',true);
//     mainList.
//     todoList.appendChild(mainList);
  
//     todoList.insertBefore(mainList, todoList.children[0]);
  
//     // first division of list
  
//     const list = document.createElement('div');
//     list.setAttribute('id', 'list');
//     mainList.appendChild(list);
  
//     // checkbox
  
//     const iconCheck = document.createElement('i');
//     list.appendChild(iconCheck);
//     iconCheck.setAttribute('class', 'tooltip');
//     iconCheck.innerHTML = '<i class="fa-regular fa-square"></i>';
  
//     //tooltip of checkbox
  
//     const completeTitle = document.createElement('span');
//     completeTitle.innerText = 'Complete';
//     iconCheck.appendChild(completeTitle);
//     completeTitle.setAttribute('class', 'tooltiptext');
  
//     //para
  
//     const para = document.createElement('p');
//     para.innerText = object.task_name;
//     list.appendChild(para);
  
  
//     //edit icon
  
//     const iconEdit = document.createElement('i');
//     iconEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
//     list.appendChild(iconEdit).setAttribute('class', 'tooltip');
  
//     const editTitle = document.createElement('span');
//     editTitle.innerText = 'Edit';
//     iconEdit.appendChild(editTitle);
//     editTitle.setAttribute('class', 'tooltiptext');
  
//     //delete icon
  
//     const iconDel = document.createElement('i');
//     iconDel.innerHTML = '<i class="fa-solid fa-trash"></i>';
//     list.appendChild(iconDel);
//     iconDel.setAttribute('class','tooltip');
  
//     const deleteTitle = document.createElement('span');
//     deleteTitle.innerText = 'Delete';
//     iconDel.appendChild(deleteTitle);
//     deleteTitle.setAttribute('class', 'tooltiptext');
  
//     //delete event function
  
//     iconDel.addEventListener('click' , () => {

//       const deleteItem = localStorage.getItem('todos');
//       console.log('check',deleteItem);
//       const checkParse = JSON.parse(deleteItem);
//       console.log('check parse',checkParse);

//       console.log('object',object);
//       const get = object;
//       const final = checkParse.map(function(val){
//         if(val.id === object.id){
//           console.log(val);
//         }
//         // console.log('val',val);
//       })

//     });
  
//     // checkbox event function
  
//     iconCheck.addEventListener('click', () => {
//       object.complete_time = new Date().getTime();
      
//       if(object.complete_time !== null){
//         todos.concat(object);
//         iconCheck.innerHTML = '<i class="fa-solid fa-square-check"></i>'
//         para.style.textDecoration = 'line-through';
//         localStorage.setItem('todos', JSON.stringify(todos));
//       }
//       todos.push(object);
//       const checkItem = localStorage.getItem('todos');
//       console.log(checkItem);
//       const checkParse = JSON.parse(checkItem);
//       console.log(checkParse);
      
//       const sprTask = [...checkParse];
//       console.log(sprTask);
//     });
  
//     // second division of list
  
//     const timeAgo = (date) => {
//       const seconds = Math.floor((new Date() - date) / 1000);
    
//       let interval = Math.floor(seconds / 31536000);
//       if (interval > 1) {
//         return interval + ' years ago';
//       }
    
//       interval = Math.floor(seconds / 2592000);
//       if (interval > 1) {
//         return interval + ' months ago';
//       }
    
//       interval = Math.floor(seconds / 86400);
//       if (interval > 1) {
//         return interval + ' days ago';
//       }
    
//       interval = Math.floor(seconds / 3600);
//       if (interval > 1) {
//         return interval + ' hours ago';
//       }
    
//       interval = Math.floor(seconds / 60);
//       if (interval > 1) {
//         return interval + ' minutes ago';
//       }
    
//       if(seconds < 10) return 'just now';
    
//       return Math.floor(seconds) + ' seconds ago';
//     };
  
//     const listOne = document.createElement('p');
//     listOne.setAttribute('id', 'right');
//     listOne.innerText = timeAgo(object.created_time) ;
//     mainList.appendChild(listOne);
  
//     // local storage task list
//     localStorage.setItem('todos', JSON.stringify(todos))



//   }
  
