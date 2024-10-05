// Your code here
const dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = '#ff69B4';
// dodger.style.bottom = '0px';
// dodger.style.left = '0px'
// document.addEventListener("keydown", function (event) {
//     console.log(event);
// });
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const maxLeft = 360; // Ensure this is the limit for dodger movement
  
    // Ensure the dodger only moves right if there's space
    if (left < maxLeft) {
      dodger.style.left = `${left + 1}px`;
    }
  }