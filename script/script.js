function clickTableCell(event) {
    let input = document.createElement("input");
    input.type = "text";
    input.id = "table-input";
    event.target.innerHTML = "";
    event.target.appendChild(input);
}


function initPage() {
    document.getElementById("table-array-string").addEventListener("click", clickTableCell, false);
}

initPage();