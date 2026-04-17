let green = 0;
let red = 0;
let blue = 0;

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function () {
    li.style.textDecoration = "line-through";
    addGreenPoint();
    li.onclick = null; // prevent double click
  };

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function addGreenPoint() {
  green++;

  if (green >= 4) {
    green -= 4;
    red++;
  }

  if (red >= 24) {
    red -= 24;
    blue++;
  }

  updateUI();
}

function updateUI() {
  document.getElementById("green").textContent = green;
  document.getElementById("red").textContent = red;
  document.getElementById("blue").textContent = blue;
}
