const gridContainer = document.querySelector("#grid-container");
const gridSizeButton = document.querySelector(".grid-size");
const gridSizeDisplay = document.querySelector(".current-size")
const resetGridButton = document.querySelector(".reset");

window.onload = () => changeGridSize();
gridSizeButton.onclick = () => changeGridSize();
resetGridButton.onclick = () => resetGrid();

function changeGridSize() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.remove();
    });

    let size = Number(prompt("Please state how big you would like the grid to be.\nFor example, if you enter 20, then the grid will be 20x20 (Maximum size of 100):"));

    if(size == 0 || size > 100) {
        alert("Please enter a valid size.");
        size = 16;
    }

    for(let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        
        for(let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.style.cssText = "border: 1px solid black;";
            column.classList.add("column");
            row.appendChild(column);
        }
        gridContainer.appendChild(row);
    }

    gridSizeDisplay.textContent = `Current grid size = ${size} x ${size}`;

    const gridColumn = document.querySelectorAll(".column");

    gridColumn.forEach((columns) => {
    columns.addEventListener("mouseover", () => {
        columns.style.backgroundColor = "black";
    });
});
}

function resetGrid() {
    const gridColumn = document.querySelectorAll(".column");

    gridColumn.forEach((columns) => {
        columns.style.backgroundColor = "white";
    });
}