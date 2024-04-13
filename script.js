function insert_Row() {
    // Get the table element by its id
    const table = document.getElementById("sampleTable");

    // Insert a new row at the beginning of the table
    const newRow = table.insertRow(0);

    // Insert two cells into the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set the content of the cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
