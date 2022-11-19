import "./styles.css";

const onClickAdd = () => {
  //TextBox
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div create
  const div = document.createElement("div");
  div.className = "list-row";

  //li create
  const li = document.createElement("li");
  li.innerText = inputText;

  //div
  div.appendChild(li);

  //incomplete
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
