//(function(){

	// Atributos/Variables
	let formControlSelect = document.getElementById("exampleFormControlSelect2");
	let rmBTN = document.getElementById('rmBTN'),
		addBTN = document.getElementById('addBTN');

	// Functions
	function removeOption(e) {
		formControlSelect.remove(formControlSelect.selectedIndex);
	}

	function addOption(e) {
		let newElement = document.createElement("option"),
		newElementContent = document.createTextNode(document.getElementById("exampleFormControlInput1").value);
		newElement.appendChild(newElementContent);
		formControlSelect.add(newElement);
	}

	// Eventos
	rmBTN.addEventListener("click", removeOption);
	addBTN.addEventListener("click", addOption);

//}())