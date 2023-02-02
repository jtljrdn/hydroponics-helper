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
            infoTable.style.display = 'inline-block'
            plantImg.src = plantInfo[i].img
            plantName.innerHTML = plantInfo[i].name
            plantType.innerHTML = plantInfo[i].type
            plantPH.innerHTML = `Recommended PH: ${plantInfo[i].ph}`
            plantEC.innerHTML = `Recommended E.C.: ${plantInfo[i].ec}`
            plantTemp.innerHTML = `Average Recommended Temperature: ${plantInfo[i].temperature}&#8457;`
            plantGrowthTime.innerHTML = `Expected Growth Time: ${plantInfo[i].growthTime}`
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