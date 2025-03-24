// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    const grid = document.getElementById('grid');
    const newRow = grid.insertRow();
    for (let i = 0; i < numCols; i++) {
        const newCell = newRow.insertCell();
        newCell.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
    }
    numRows++;
    if (numCols === 0) {
        numCols = 1;
        const newCell = newRow.insertCell();
        newCell.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
    }
}

// Add a column
function addC() {
    const grid = document.getElementById('grid');
    for (let i = 0; i < numRows; i++) {
        const row = grid.rows[i];
        const newCell = row.insertCell();
        newCell.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
    }
    numCols++;
    if (numRows === 0) {
        numRows = 1;
        const newRow = grid.insertRow();
        const newCell = newRow.insertCell();
        newCell.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
    }
}

// Remove a row
function removeR() {
    const grid = document.getElementById('grid');
    if (numRows > 0) {
        grid.deleteRow(numRows - 1);
        numRows--;
        if (numRows === 0) {
            numCols = 0;
        }
    }
}

// Remove a column
function removeC() {
    const grid = document.getElementById('grid');
    if (numCols > 0) {
        for (let i = 0; i < numRows; i++) {
            const row = grid.rows[i];
            row.deleteCell(numCols - 1);
        }
        numCols--;
        if (numCols === 0) {
            numRows = 0;
            while (grid.rows.length > 0) {
                grid.deleteRow(0);
            }
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    const grid = document.getElementById('grid');
    for (let i = 0; i < numRows; i++) {
        const row = grid.rows[i];
        for (let j = 0; j < numCols; j++) {
            const cell = row.cells[j];
            if (!cell.style.backgroundColor) {
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    const grid = document.getElementById('grid');
    for (let i = 0; i < numRows; i++) {
        const row = grid.rows[i];
        for (let j = 0; j < numCols; j++) {
            const cell = row.cells[j];
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}