let smallCursor = document.querySelector('.smallCursor')
let shadowCursor = document.querySelector('.shadowCursor')

let mouseX;
let mouseY;
let animationId = null;
let timer;

document.addEventListener('mousemove', function (eventObj) {
  // mouse Coordinate or location
  // console.log(eventObj);
  
  mouseX = eventObj.clientX
  mouseY = eventObj.clientY
  smallCursor.style.left = mouseX + "px"; // clientX is mouse position at X
  smallCursor.style.top = mouseY + "px"; // clientY is mouse position at Y

  
  // animateShadowCursor()  // every time the mouse moves the function is called // this is moved to global scope


  if (!animationId) {
    animateShadowCursor()
  }
  
  clearTimeout(timer)
  timer = setTimeout(() => {
    cancelAnimationFrame(animationId)
    animationId = null
  }, 2000);


})

function animateShadowCursor() {
  let currentX = parseFloat(shadowCursor.style.left) || 0 // clientX
  let currentY = parseFloat(shadowCursor.style.top) || 0 // clientY
  // console.log(currentX, currentY);

  let distanceX = mouseX - currentX
  let distanceY = mouseY - currentY

  shadowCursor.style.left = currentX + distanceX*0.05 + 'px'
  shadowCursor.style.top = currentY + distanceY*0.05 + 'px'
  
  animationId = requestAnimationFrame(animateShadowCursor)
  //console.log(animationId);// it loops the function and it never stop.
}
