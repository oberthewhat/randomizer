//take names and add to ul (array)

//have randomizer button pick random from array and add to selected
//randomizer button also removes item from the ul

//return to list button needs to push back into the ul

var list = []
var selected = []
var addButton = document.getElementById("addButton")
var item = document.getElementById('itemAdd')


addButton.addEventListener('click', () => {
	list.push(item.value)
	var listOfItems = document.getElementById('listOfItems')
	const listDiv = document.createElement('li')
	listDiv.innerHTML=item.value
	listOfItems.appendChild(listDiv)


}) 

