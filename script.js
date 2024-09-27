const task = document.getElementById("taskInput");
const addBtn = document.getElementById("add");
const mainBlock = document.getElementById("to-doList");

addBtn.addEventListener("click", () => {
  const taskText = task.value.trim();

  if (taskText === "") {
    alert("Введите вашу задачу");
    return;
  }

  const div = document.createElement("div");
  div.className = "newTask";
  div.innerHTML = `<p>${taskText}</p>`;

  const delBtn = document.createElement("button");
  delBtn.id = "delBtn";
  delBtn.textContent = "Удалить";

  delBtn.addEventListener("click", () => {
    div.remove();
  });

  div.append(delBtn);

  mainBlock.append(div);

  task.value = "";
});
