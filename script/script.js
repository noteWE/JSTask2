function getStringWithMaxLen(arrayString) {
    let string = null;
    let maxLen = 0;
    for (let i = 0; i < arrayString.length; i++) {
        if (arrayString.item(i).value.length > maxLen) {
            string = arrayString.item(i).value;
            maxLen = string.length;
        }
    }
    return string;
}

function getFrequentChar(string) {
    let arr = [];
    arr.length = 256;
    for (let i = 0; i < 256; i++) {
        arr[i] = 0;
    }
    for (let i = 0; i < string.length; i++) {
        arr[string.charCodeAt(i)]++;
    }
    let frequentChar = null;
    let maxFrequent = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > maxFrequent) {
            maxFrequent = arr[i];
            frequentChar = i;
        }
    }
    return String.fromCharCode(frequentChar);
}

function isAnagram(string1, string2) {
    for (let i = 0; i < string1.length; i++) {
        let ind = string2.indexOf(string1.charAt(i));
        if (ind < 0)
            return false;
        else {
            string2 = string2.substring(0, ind) + string2.substring(ind + 1, string2.length);
        }
    }
    if (string2.length == 0)
        return true;
    return false;
}

function initPage() {
    let selectedCell = null;
    document.getElementById("table-array-string").addEventListener("click", (event) => { selectedCell = event.target.parentNode.parentNode; }, false);
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
        let answer = document.getElementById("answer-array-string");
        answer.innerHTML = getStringWithMaxLen(arrayString);
        answer.style.visibility = "visible";
    };

    document.getElementById("button-frequent-char").onclick = () => {
        let input = document.getElementById("input-frequent-char");
        let string = input.value;
        let ans = document.getElementById("answer-frequent-char");
        let char = getFrequentChar(string);
        ans.innerHTML = char;
        input.setAttribute("frequentchar", char);
        ans.style.visibility = "visible";
    };

    document.getElementById("button-replace-char").onclick = () => {
        let ans = document.getElementById("answer-replace-char");
        ans.innerHTML = document.getElementById("input-frequent-char").value.replaceAll(
            document.getElementById("input-frequent-char").getAttribute("frequentchar"),
            document.getElementById("input-replace-char").value
        );
        ans.style.visibility = "visible";
    }

    document.getElementById("button-anagram-string").onclick = () => {
        let inputs = document.getElementsByClassName("input-anagram-sting");
        let ans = document.getElementById("answer-anagram-string");
        ans.innerHTML = isAnagram(inputs.item(0).value, inputs.item(1).value);
        ans.style.visibility = "visible";
    }
}

initPage();