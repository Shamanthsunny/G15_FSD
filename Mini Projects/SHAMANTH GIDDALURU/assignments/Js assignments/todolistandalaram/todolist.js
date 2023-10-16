const addBtn = document.querySelector("#btn-add");
// 
// const Taskscontainer = document.querySelector("#tasks");
// const error = document.getElementById("error");
// const count = document.querySelector(".count")
// let taskcount =  0;
//  const displayCount = (taskcount) => {
//     count.innetText = taskcount;

//  };
let todolistArray = [];
let LocalStorage = localStorage.getItem("tasklist");
if (LocalStorage != null){
    todolistArray = JSON.parse(LocalStorage);
    showList();
}

function addTask () {
    
    // debugger;
    let taskInput = document.querySelector("#task").value;
    if(taskInput===""){
        error()
    }else {
        let todoobject = {
            taskId: todolistArray.length+1,
            taskname: taskInput
        };
        todolistArray.push(todoobject);
        localStorage.setItem("tasklist",JSON.stringify(todolistArray));
    }  
    showList();
}

addBtn.addEventListener("click", addTask);


function showList () {
    document.querySelector("#tasks").innerHTML = "";
    for (let index= 0;index< todolistArray.length;index++){
        
        let task = document.createElement("p");
        task.textContent = todolistArray[index].taskname;
        document.querySelector("#tasks").appendChild(task);
        let mydiv = document.createElement("div");
        mydiv.classList.add("settings");

        let editIcon = document.createElement('button');
        editIcon.textContent = "Edit"
        editIcon.setAttribute('class', 'Editbtn');
        editIcon.addEventListener("click",editTask);
        
        let DeleteIcon = document.createElement("button");
        DeleteIcon.textContent = "Delete"
        DeleteIcon.setAttribute('class', 'Deletebtn');
        DeleteIcon.addEventListener("click",deleteTask);
        DeleteIcon.taskId = todolistArray[index].taskId;
        mydiv.appendChild(editIcon);
        mydiv.appendChild(DeleteIcon);
        document.querySelector("#tasks").appendChild(mydiv);

    }   
}



function deleteTask(event){
    let index = todolistArray.findIndex(m=>m.taskId == event.target.taskId);
    todolistArray.splice(index,1);
    localStorage.setItem("tasklist",JSON.stringify(todolistArray));
    showList();
}
function editTask(event) {
    let obj = todolistArray.find(m => m.taskId == event.target.taskId);

    if (obj) {
        let updatedTask = prompt("Edit Task:", obj.taskname);

        if (updatedTask !== null) {
            obj.taskname = updatedTask;
            localStorage.setItem("tasklist", JSON.stringify(todolistArray));
            showList();
        }
    } else {
        console.error("Task not found for editing.");
    }
}

function error (){
    let error = document.getElementById("error")
    error.setAttribute("style","display:block")
}




