function initPage() {
    let selectedCell = null;
    document.getElementById("table-array-string").addEventListener("click", () => { selectedCell = event.target.parentNode }, false);
    document.getElementById("form-input-button-delete-row").onclick = () => {selectedCell.parentNode.removeChild(selectedCell)};
    document.getElementById("form-input-button-add-row").onclick = () => {
        let input = document.createElement("input");
        input.type = "text";
        input.id = "table-input";
        input.className = "table-cell-input";
        let td = document.createElement("td");
        td.className = "table-cell-array-string";
        let tr = document.createElement("tr");
        tr.className = "table-row-array-string";
        tr.appendChild(td)
        td.appendChild(input);
        document.getElementById("table-body-array-string").appendChild(tr);
    };
    document.getElementById("form-input-button-apply").onclick = () => {
        let arrayString = document.getElementsByClassName("table-cell-input");
        let string = null;
        let maxLen = 0;
        for (let i = 0; i < arrayString.length; i++) {
            if (arrayString.item(i).value.length > maxLen) {
                string = arrayString.item(i).value;
                maxLen = string.length;
            }
        }
        console.log(string);
        let answer = document.getElementById("answer-array-string");
        answer.innerHTML = string;
        answer.style.visibility = "visible";
    };

    document.getElementById("form-input-button").onclick = () => {
        
    };
}

initPage();