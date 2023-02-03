const plantInfo = [
    {name: 'Lettuce', ph: 5.3, ec: 1.8, growthTime: '7 weeks', temperature: 72, img: 'pictures/lettuce.JPG', type: 'Leafy Green'},
    {name: 'Rainbow Chard', ph: '6 - 6.8', ec: 2.0, growthTime: '8 weeks', temperature: 72, img: 'pictures/rainbow-chard.JPG', type: 'Leafy Green'},
    {name: 'Cilantro', ph: '6.5 - 7.5', ec: '1.2 - 2.8', growthTime: '7 weeks', temperature: 60, img: 'pictures/cilantro.JPG', type: 'Herb'},
    {name: 'Dill', ph: '5.6 - 6.5', ec: '1 - 1.6', growthTime: '7 weeks', temperature: 67, img: 'pictures/dill.JPG', type: 'Herb'},
    {name: 'Arugula', ph: '6 - 7.5', ec: '0.8 - 1.4', growthTime: '6 weeks', temperature: 55, img: 'pictures/arugula.JPG', type: 'Leafy Green'},
    {name: 'Curly Kale', ph: '6.0 - 6.5', ec: '1.2 - 2.4', growthTime: '6 weeks', temperature: 70, img: 'pictures/curly-kale.JPG', type: 'Leafy Green'},
    {name: 'Tomatoes', ph: '6 - 6.5', ec: '2 - 4', growthTime: '8 weeks', temperature: 62, img: 'pictures/tomatoes.JPG', type: 'Fruit'},
    {name: 'Bell Peppers', ph: '5.5 - 6.5', ec: '2 - 2.5', growthTime: '9 weeks', temperature: 75, img: 'pictures/bell-peppers.JPG', type: 'Fruit'},
    {name: 'Parsley', ph: '6.0 - 6.5', ec: '0.8 - 1.8', growthTime: '4 weeks', temperature: 75, img: 'pictures/parsley.JPG', type: 'Herb'},
]

const plantSelect = document.getElementById('selectPlant')

const plantImg = document.getElementById('img-plant')

const plantName = document.getElementById('plant-name')
const plantType = document.getElementById('plant-type')
const plantPH = document.getElementById('plant-ph')
const plantEC = document.getElementById('plant-ec')
const plantTemp = document.getElementById('plant-temp')
const plantGrowthTime = document.getElementById('plant-growth-time')

const infoTable = document.getElementById('table-info')

plantSelect.addEventListener('change', function(){fillInfo(plantSelect.value)})