function fillDropdown() {
  // programmatically fills the dropdown
  for (let i = 0; i < plantInfo.length; i++) {
    const plantName = plantInfo[i].name;
    let op = document.createElement("option");
    op.value = plantName;
    op.innerHTML = cap(plantName);
    plantSelect.appendChild(op);
  }
}

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function fillInfo(plantChoice) {
    console.log(plantChoice)
    if (plantChoice != '') {
        resetInfo()
        for (let i = 0; i < plantInfo.length; i++) {

        }
    }
}

function resetInfo(){
    
}