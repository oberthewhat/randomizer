//take names and add to ul (array)

//have randomizer button pick random from array and add to selected
//randomizer button also removes item from the ul

//return to list button needs to push back into the ul

var list = [];
var selected = [];
var addButton = document.getElementById("addButton");
var inputField = document.getElementById("itemAdd");
var listOfItems = document.getElementById("listOfItems");
let randomItemDisplay = document.getElementById("display");
let randomBtn = document.getElementById("randomButton");

const newItemCreator = function () {
  list.push(inputField.value);
  const newItem = document.createElement("li");

  let classString = inputField.value;
  classString = classString.replace(/\s+/g, "");

  newItem.innerHTML = inputField.value;
  newItem.setAttribute("id", classString);
  listOfItems.appendChild(newItem);
  inputField.value = "";
};

addButton.addEventListener("click", newItemCreator);

const randomNumGenerator = function () {
  let randomNum = Math.floor(Math.random() * list.length);
  return randomNum;
};

function appendRandItem() {
  let item = list[randomNumGenerator()];
  let elem = document.createElement("p");
  elem.innerHTML = item;
  elem.setAttribute("id", item);
  randomItemDisplay.appendChild(elem);

  let selectedItemClass = item.replace(/\s+/g, "");
  console.log(selectedItemClass);
  removeSelectedItem(selectedItemClass, item);
}

function removeSelectedItem(idName, text) {
  let item = document.getElementById(idName).remove();
  console.log(list)
}

randomBtn.addEventListener("click", function () {
  appendRandItem();
});
