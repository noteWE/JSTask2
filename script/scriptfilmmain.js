function initPage() {
    let tmp = localStorage.getItem("setFilms");
    let setFilm;
    console.log(tmp);
    if (!!!tmp) {
        setFilm = new Map();
    } else {
        setFilm = new Map(JSON.parse(tmp));
    }

    console.log(JSON.parse(localStorage.getItem("setFilms")));
    console.log(setFilm);

    let list = document.getElementById("div-films-list");
    if (setFilm.size == 0) {
        let p = document.createElement("p");
        p.innerHTML = "В вашей библиотеке пока нет фильмов!";
        p.className = "message-warning";
        list.appendChild(p);
    } else {
        for (let filmPair of setFilm) {
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
                localStorage.setItem("selectedFilm", JSON.stringify(setFilm.get(tmp.lastElementChild.innerHTML)));
                window.location.href = "aboutfilm.html";
                return false;
            };
            pDelete.onclick = (ev) => {
                let tmp = ev.target.parentElement
                         .parentElement
                         .parentElement;
                tmp.remove();
                setFilm.delete(tmp.lastElementChild.innerHTML);
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

initPage();

