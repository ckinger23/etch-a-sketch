window.addEventListener("DOMContentLoaded", () => {

  makeGrid(16);
  setDraw();

  let resetBtn = document.querySelector("button");
  resetBtn.addEventListener("click", () => {
    let size = prompt("How many squares would you like per side?");
    while (size < 1 || size > 100){
      size = prompt("How many squares would you like per side?");
    }
    makeGrid(parseInt(size));
    setDraw();
  });


});

function setDraw() {

  let container = document.querySelector(".container");
  let divs = Array.from(container.querySelectorAll('div'));

  divs.forEach(div => {
    div.addEventListener("mouseenter", () => {
      div.classList.add("colored");
    });
  });
}


function clearDiv(container) {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function makeGrid(size) {
  let container = document.querySelector(".container");

  clearDiv(container);
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;


  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let div = document.createElement('div')
      container.appendChild(div);
    }
  }
}
