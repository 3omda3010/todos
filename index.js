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
        newTask.textContent = inputBox.value;
        listContainer.appendChild(newTask);
        saveData();
    }
    let canselBtn = document.createElement("span");
    canselBtn.textContent = "\u00d7";
    newTask.appendChild(canselBtn);
    inputBox.value = '';
    saveData();
}
// checked and remove task with  click 
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData()