const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById("list-container");
// adding Task
function addTask() {
    const newTask = document.createElement(`li`);
    const taskText = inputBox.value.trim();
    if (taskText === '') {
        console.error('Task input is empty.');
        return;
    }
    else{
        newTask.innerHTML = inputBox.value;
        listContainer.appendChild(newTask);
    }
    let canselBtn = document.createElement("span");
    canselBtn.innerHTML = "\u00d7";
    newTask.appendChild(canselBtn);
    inputBox.value = '';
}
// checked and remove task with  click 
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)

