//(function(){
	let formControlSelect = document.getElementById("exampleFormControlSelect2"),
	newElement = document.createElement("option"),
	newElementContent = document.createTextNode("newTask");
	newElement.appendChild(newElementContent);

	let newElement2 = document.createElement("option"),
	newElement2Content = document.createTextNode("newTask2");
	newElement2.appendChild(newElement2Content);

	formControlSelect.add(newElement);
	formControlSelect.add(newElement2);

	let rmBTN = document.getElementById('rmBTN');

	function removeOption(e) {
		formControlSelect.remove(formControlSelect.selectedIndex);
	}

	rmBTN.addEventListener("click", removeOption);

//}())