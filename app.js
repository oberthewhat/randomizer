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
  list.push(inputField.value);//pushing from the input area into the list array
  const newItem = document.createElement("li");//creating new element

  let classString = inputField.value;
  classString = classString.replace(/\s+/g, ""); //turns the value from input field into a string with no spaces to set an id

  newItem.innerHTML = inputField.value; //sets value of list item to the 
  newItem.setAttribute("id", classString);//set element as id name
  listOfItems.appendChild(newItem);//item gets added to the list of items div
  inputField.value = "";//clears out the input field
};

addButton.addEventListener("click", newItemCreator);//makes the click run the function

const randomNumGenerator = function () {
  let randomNum = Math.floor(Math.random() * list.length); //gets a random number based on the length of the list 
  return randomNum;
};

function appendRandItem() {
  let item = list[randomNumGenerator()]; //pass the random number to get the item index
	let elem = document.createElement("p"); //gets element of p and stores as elem
  let selectedItemId = item.replace(/\s+/g, "");	
  elem.innerHTML = item; //makes the element display the text of the item
  elem.setAttribute("id", selectedItemId);// sets the id as the item without spaces
  randomItemDisplay.appendChild(elem); 
  removeSelectedItem(selectedItemId, item);//function that removes from dom and array
}

function removeSelectedItem(idName, text) {
  let item = document.getElementById(idName).remove();
  let index = list.indexOf(text)
  list.splice(index, 1)
  console.log(list)
}

randomBtn.addEventListener("click", function () {
  appendRandItem();
});
