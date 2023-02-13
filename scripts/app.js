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
            plantName.innerHTML = `<strong>${plantInfo[i].name}</strong>`
            plantType.innerHTML = `<em>${plantInfo[i].type}</em>`
            plantPH.innerHTML = `Recommended PH: ${plantInfo[i].ph}`
            plantEC.innerHTML = `Recommended E.C.: ${plantInfo[i].ec}`
            plantTemp.innerHTML = `Average Recommended Temperature: ${plantInfo[i].temperature}&#8457;`
            plantGrowthTime.innerHTML = `Expected Growth Time: ${plantInfo[i].growthTime}`
            }
        }
    } else {
      alert('Please Choose a Plant')
    }
}

function calculateEC(currentEC, currentPlant) {
  EcResult.innerHTML = '';
  for (let i = 0; i < plantInfo.length; i++) {
    if (currentPlant == plantInfo[i].name) {
      currentPlant = plantInfo[i];
      console.log(currentEC, currentPlant.ec);
      let newEC = 0;
      let cupsToAdd = 0;
      if (currentEC < currentPlant.ec) {
        newEC = currentPlant.ec - currentEC;
        cupsToAdd = newEC / 0.4 / 4;
        cupsToAddFixed = cupsToAdd.toFixed(2);
        EcResult.innerHTML = `Add ${cupsToAddFixed} cups of NPK mixture to your water for ${currentPlant.name}.`;
      } else if (currentEC == currentPlant.ec) {
        alert("Your E.C. is already high enough");
      } else if (currentEC > currentPlant.ec) {
        alert("Your E.C. is too high, add water to mixture.");
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
    currentEC.value = '';
    EcResult.innerHTML = '';
}