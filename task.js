
// Initialize Firebase with your config
firebase.initializeApp({
    apiKey: "AIzaSyC9VrOF35xksPjZh8ubIuPlDu1b-u8RPRk",
    authDomain: "task-management-8a1a2.firebaseapp.com",
    projectId: "task-management-8a1a2",
});
  
const db = firebase.firestore();
  
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = taskText + ' <button onclick="toggleTaskCompletion(this)">Complete</button>';
        taskList.appendChild(taskItem);
        taskInput.value = ""; // Clear input field
    }
}

function toggleTaskCompletion(button) {
    var taskItem = button.parentNode;
    taskItem.classList.toggle("completed");
    if (button.textContent === "Complete") {
        button.textContent = "Undo";
    } else {
        button.textContent = "Complete";
    }
}