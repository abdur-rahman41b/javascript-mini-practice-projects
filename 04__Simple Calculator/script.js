let display = document.querySelector('.display')

function appendValue(text) {
  if (display.innerText === '0' || display.innerText === 'Error' || display.innerText === 'Infinity') {
    display.innerText = text
    return
  }

  display.innerHTML = `${display.innerText}${text}`
}

function clearDisplay() {
  display.innerHTML = '0'
}


function calculate() {
  try {
    display.innerText = eval(display.innerText)
  } catch (error) {
    display.innerText = 'Error'
  }

}
