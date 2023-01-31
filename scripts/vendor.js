const plantInfo = [
    {name: 'lettuce', ph: 5.3, ec: 1.8, growthTime: '2 weeks', temperature: 72, img: 'pictures/'},
    {name: 'carrots', ph: '6 - 6.3', ec: 0, growthTime: ' 11 weeks', temperature: 65, img: 'pictures/'},
    {name: 'rainbow chard', ph: '6 - 6.8', ec: 0, growthTime: '8 weeks', temperature: 72, img: 'pictures/rainbow-chard.jpg'},
    {name: 'coriander', ph: '6.5 - 7.5', ec: '1.2 - 2.8', growthTime: '7 weeks', temperature: 60, img: 'pictures/'},
    {name: 'dill', ph: '5.6 - 6.5', ec: '1 - 1.6', growthTime: '13 weeks', temperature: 67, img: 'pictures/'},
    {name: 'arugula', ph: '6 - 7.5', ec: '0.8 - 1.4', growthTime: '6 weeks', temperature: 55, img: 'pictures/'},
    {name: 'brown mustard kale', ph: '6.0 - 6.5', ec: '1.2 - 2.4', growthTime: '6 weeks', temperature: 70, img: 'pictures/'},
    {name: 'tomatoes', ph: '6 - 6.5', ec: '2 - 4', growthTime: '8 weeks', temperature: 62, img: 'pictures/'},
    {name: 'bell peppers', ph: '5.5 - 6.5', ec: '2 - 2.5', growthTime: '9 weeks', temperature: 75, img: 'pictures/'},
]

const plantSelect = document.getElementById('selectPlant')

const plantImg = document.getElementById('img-plant')

const plantName = document.getElementById('plant-name')
const plantType = document.getElementById('plant-type')
const plantPH = document.getElementById('plant-ph')
const plantEC = document.getElementById('plant-ec')
const plantTemp = document.getElementById('plant-temp')
const plantGrowthTime = document.getElementById('plant-growth-time')

plantSelect.addEventListener('change', function(){fillInfo(plantSelect.value)})