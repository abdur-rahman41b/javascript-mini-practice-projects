// step 1
let body = document.querySelector('body')
let randomBtn = document.querySelector('.random-color')
let applyBtn = document.querySelector('.apply-color')
let colorInput = document.querySelector('#colorInput')
let currentColor = document.querySelector('.current-color')


// step 5
// 20 colors in an array
const colorArray = [
  'red', 'blue', 'green', 'yellow', 'orange',
  'purple', 'pink', 'brown', 'white', 'gray', 'black',
  'white', 'cyan', 'magenta', 'lime', 'teal',
  'navy', 'maroon', 'olive', 'silver', 'gold'
]

// step 6 
const randomColorGen = () => {
  const randomNumber = Math.floor(Math.random() * colorArray.length);
  // colorArray[randomNumber]
  return colorArray[randomNumber]
}


// step 4
const changeColor = (color) => {
  body.style.backgroundColor = color;
  currentColor.innerHTML = color
};


// step 2
// creating functions to maintain the code later
const handleRandomBtnClick = () => {
  let color = randomColorGen() // step 7
  changeColor(color)  // step 8
}
const handleApplyBtnClick = () => {
  const color = colorInput.value; // storing color input value to a variable and pass it as parameter of changeColor() function

  changeColor(color)
}

// step 3
randomBtn.addEventListener('click', handleRandomBtnClick)
applyBtn.addEventListener('click', handleApplyBtnClick)














