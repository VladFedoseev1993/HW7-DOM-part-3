function addText() {
  let input = document.getElementById('inputTask').value;
  let node = document.createElement("li");
  let textnode = document.createTextNode(input);

  document.getElementById('addTask').appendChild(node);
  node.appendChild(textnode);
  node.addEventListener('click', function (e) {
    node.classList.toggle('checked');
  }, false);


  let removeTask = document.createElement('input');
  removeTask.setAttribute('type', 'button');
  removeTask.setAttribute("value", "delete");
  removeTask.setAttribute("id", "removeButton");
  removeTask.addEventListener('click', function (e) {
    node.parentNode.removeChild(node);
  }, false);
  node.appendChild(removeTask);

}