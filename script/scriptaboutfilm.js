function initPage() {
    let film = JSON.parse(localStorage.getItem("selectedFilm"));

    let list = document.getElementById("film-attributes");
    
    let arrayPageFields = [
        document.getElementById("about-header"),
        ...Array.from(list.getElementsByClassName("film-attribute-value"))
    ];

    let filmFields = Film.prototype.toArray.call(film);

    let i = 0;
    arrayPageFields.forEach(
        (el) => {
            el.innerHTML = filmFields[i];
            i++;
        }
    )
    document.getElementById("film-poster").style.backgroundImage =
        "url(" + filmFields[filmFields.length - 1] + ")";
}

initPage();