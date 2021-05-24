function getSelectedHTML(select) {
    let opts = select.children;
    let selections = [];
    console.log(opts);
    for (let i = 0; i < opts.length; i++) {
        if (opts[i].selected) {
            selections.push(opts[i].value)
        }
    }
    return selections;
}

function resetFilmsList(list) {
    console.log(list.children.length);
    Array.from(list.children).forEach((el) => {console.log(el); el.remove();});
}

function fillFilmsList(setFilms, list) {
    if (setFilms.size == 0) {
        let p = document.createElement("p");
        p.innerHTML = "Нет фильмов удовлетворяющих заданным параметрам фильтрации!";
        p.className = "message-warning";
        list.appendChild(p);
    } else {
        for (let filmPair of setFilms) {
            let film = filmPair[1];
            let card = document.createElement("div");
            card.className = "film-card";
            let filmImg = document.createElement("div");
            filmImg.className = "film-card-img";
            let cardOver = document.createElement("div");
            cardOver.className = "film-card-img-over";
            let pLink = document.createElement("p");
            let pDelete = document.createElement("p");
            pLink.onclick = (ev) => {
                let tmp = ev.target.parentElement
                         .parentElement
                         .parentElement;
                localStorage.setItem("selectedFilm", JSON.stringify(setFilms.get(tmp.lastElementChild.innerHTML)));
                window.location.href = "aboutfilm.html";
                return false;
            };
            pDelete.onclick = (ev) => {
                let tmp = ev.target.parentElement
                         .parentElement
                         .parentElement;
                tmp.remove();
                setFilms.delete(tmp.lastElementChild.innerHTML);
                localStorage.setItem("setFilms", JSON.stringify(Array.from(setFilm)));
            };
            pLink.id = "film-card-img-link";
            pDelete.id = "film-card-img-delete";
            pLink.className = pDelete.className = "film-card-img-act";
            pLink.innerHTML = "Перейти";
            pDelete.innerHTML = "Убрать";
            cardOver.appendChild(pLink);
            cardOver.appendChild(pDelete);
            filmImg.appendChild(cardOver);
            filmImg.style.backgroundImage = "url(" + film.poster + ")";
            card.appendChild(filmImg);
            let title = document.createElement("p");
            title.className = "film-card-title";
            title.innerHTML = film.title;
            card.appendChild(title);
            list.appendChild(card);
        }
    }

    Array.prototype.forEach.call(
        document.getElementsByClassName("film-card-img-over"),
        (elementHtml) => {
            elementHtml.addEventListener("mouseenter",
            (event) => {
                event.target.style.opacity = "1";
            }, false)
            elementHtml.addEventListener("mouseleave", 
            (event) => {
                event.target.style.opacity = "0";
            }, false)
    });
}

function initPage() {
    let selYears = document.getElementById("select-filter-year");
    for (let i = 1800; i < (new Date()).getFullYear(); i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        selYears.appendChild(opt);
    }
    let tmp = localStorage.getItem("setFilms");
    let setFilm = new Map();
    console.log(tmp);
    if (!!tmp) {
        setFilm = new Map(JSON.parse(tmp));
    }

    console.log(JSON.parse(localStorage.getItem("setFilms")));
    console.log(setFilm);

    let list = document.getElementById("div-films-list");
    document.getElementById("form-button-filter").onclick = () => {
            resetFilmsList(list);
            fillFilmsList(new Map(Array.from(setFilm).filter((el) => {
            let sels = getSelectedHTML(document.getElementById("select-filter-genre"));
            let j = 0;
            for (let i = 0; i < el[1].genre.length; i++) {
                if (sels[j] == el[1].genre[i]) {
                    j++;
                }
            }
            if (j == 0 && sels.length != 0) {
                return false;
            }
            sels = getSelectedHTML(document.getElementById("select-filter-country"));
            j = 0;
            for (let i = 0; i < sels.length; i++) {
                if (el[1].country.includes(sels[i])) {
                    j++;
                }
            }
            if (j == 0 && sels.length != 0) {
                return false;
            }

            let chk = false;
            sels = getSelectedHTML(document.getElementById("select-filter-year"));
            for (let i = 0; i < sels.length; i++) {
                if (el[1].date.includes(sels[i])) {
                    chk = true;
                }
            }
            if (!chk && sels.length != 0)
                return false;
            return true;
        })), list);
    }

    if (setFilm.size == 0) {
        let p = document.createElement("p");
        p.innerHTML = "В вашей библиотеке пока нет фильмов!";
        p.className = "message-warning";
        list.appendChild(p);
    } else {
        fillFilmsList(setFilm, list);
    }
}

initPage();

