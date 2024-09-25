const gridContainer = document.querySelector("#grid-container");

for(let i = 0; i < (16); i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    
    for(let j = 0; j < 16; j++) {
        const column = document.createElement("div");
        column.style.cssText = "border: 1px solid black;";
        column.classList.add("column");
        row.appendChild(column);
    }
    gridContainer.appendChild(row);
}

const gridColumn = document.querySelectorAll(".column");

gridColumn.forEach((columns) => {
    columns.addEventListener("mouseover", () => {
        columns.style.backgroundColor = "black";
    });
});