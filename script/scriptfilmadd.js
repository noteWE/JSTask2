

function initPage() {
    let setFilms = new Map(JSON.parse(localStorage.getItem("setFilms")));
    
    document.getElementById("form-button-add").onclick = () => {
        let formFields = document.getElementsByClassName("form-fields");
        let formFieldsValues = [];
        for (let i = 0; i < formFields.length; i++) {
            if (formFields[i].classList.contains("check-box-list")) {
                let childs = formFields[i].children;
                let checkBoxValues = [];
                for (let j = 0; j < childs.length; j++) {
                    if (childs[j].firstElementChild.checked) {
                        checkBoxValues.push(childs[j].lastElementChild.innerHTML);
                    }
                }
                formFieldsValues.push(checkBoxValues);
                continue;
            }
            formFieldsValues.push(formFields[i].value);
        }
        let filmTmp = new Film(...formFieldsValues);
        setFilms.set(filmTmp.title, filmTmp);
        localStorage.setItem("setFilms", JSON.stringify(Array.from(setFilms)));
    };

}


initPage();