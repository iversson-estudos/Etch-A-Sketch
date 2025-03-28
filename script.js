//selects grid
const gridContainer = document.querySelector(".grid");

//selects button
const btnNewGrid = document.getElementById("generateGrid");

//margin and border for the grid
gridContainer.style.margin = "10px";
gridContainer.style.border = "1px solid black";

//all the boxes where the mouse enters changes color to black
function changeColorTrail(event) {
  event.target.style.backgroundColor = "black";
  event.target.style.color = "black";
}

//asks user for input, and creates grid accordingly
btnNewGrid.addEventListener("click", generateGrid);

function generateGrid() {
  //this prevents grid duplication
  removeAllChildren(gridContainer);

  //asks users for grid size
  let sizeNewGrid = window.prompt("Whats the size of the canvas?", 50);
  if (sizeNewGrid <= 0 || typeof sizeNewGrid !== "number") {
    sizeNewGrid = 50;
  }

  //prevents grid sizes bigger than 100
  if (sizeNewGrid > 100) {
    sizeNewGrid = 100;
  }

  //calculates divs size based on grid size (800) minus border (1px all directions)
  const sizeDiv = 800 / sizeNewGrid - 2;

  //as is an YxY grid the number of divs is squared
  const divNumbers = sizeNewGrid * sizeNewGrid;

  //loop that creates the divs in the grid
  for (let i = 0; i < divNumbers; i++) {
    const gridInsertion = document.createElement("div");
    gridInsertion.style.border = "1px solid black";
    gridInsertion.style.height = sizeDiv + "px";
    gridInsertion.style.width = sizeDiv + "px";
    gridInsertion.addEventListener("mouseover", changeColorTrail);
    gridContainer.appendChild(gridInsertion);
  }
}

// this function is a must in all code, always useful
function removeAllChildren(parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}
