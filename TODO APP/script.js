
let todoList=[
    {
        item: 'buy milk',
        dueDate: '01/01/2026'
    },  
    {
        item:'go to college',
        dueDate: '01/01/2026'
    }
];

displayItems();

function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let todoItem = inputElement.value;
    let dateElement=document.querySelector('#todo-date');
    let todoDate = dateElement.value;

    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value='';
    displayItems();
}

function displayItems(){
    let containerElement=document.querySelector('.todo-container');
    let newHtml = '';
    for(let i = 0;i<todoList.length;i++){
        let {item, dueDate} = todoList[i];

        newHtml +=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="
        todoList.splice(${i},1); 
        displayItems();">Delete</button>
        `;  
    }
    containerElement.innerHTML = newHtml;
}