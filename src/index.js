import "./styles.css";

const onClickAdd = () => {
  //TextBox
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divタグ作成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;

  //buttonタグ(完了)作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ボタンを押されると親タグを未完了リストから削除する&完了リストに追加する
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstChild.innerText;
    deleteFromIncompleteList(completeButton.parentNode);

    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻る";

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  //buttonタグ(削除)作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //incomplete
  document.getElementById("incomplete-list").appendChild(div);

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  //押された削除ボタンの親タグを未完了リストから削除する
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
