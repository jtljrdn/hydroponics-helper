function fillDropdown() {
  // programmatically fills the dropdown
  for (let i = 0; i < plantInfo.length; i++) {
    const plantName = plantInfo[i].name;
    let op = document.createElement("option");
    op.value = plantName;
    op.innerHTML = plantName;
    plantSelect.appendChild(op);
  }
}

function fillInfo(plantChoice) {
    console.log(plantChoice)
    if (plantChoice != '') {
        resetInfo()
        for (let i = 0; i < plantInfo.length; i++) {
            if (plantChoice == plantInfo[i].name) {
            console.log(plantInfo[i].name, plantChoice)
            plantImg.src = plantInfo[i].img
            plantName.innerHTML = plantInfo[i].name
            }
        }
    }
}

function resetInfo(){
    plantImg.src = '';
    plantName.innerHTML = '';
    plantType.innerHTML = '';
    plantPH.innerHTML = '';
    plantEC.innerHTML = '';
    plantTemp.innerHTML ='';
    plantGrowthTime.innerHTML = '';
}