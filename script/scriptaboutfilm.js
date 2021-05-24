function initPage() {
    let film = JSON.parse(localStorage.getItem("selectedFilm"));
    let comments = new Map(JSON.parse(localStorage.getItem("comments")));

    console.log(film.title);

    let commentsToFilm = comments.get(film.title) == undefined ? [] : comments.get(film.title);

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

    document.getElementById("form-button-add-comment").onclick = () => {
        let username = document.getElementById("comment-input-username").value;
        let text = document.getElementById("comment-input-text").value;
        let warning = document.getElementById("comment-warning");
        if (!!username && !!text) {
            console.log(commentsToFilm);
            commentsToFilm.push(new CommentToFilm(username, text));
            comments.set(film.title, commentsToFilm);
            localStorage.setItem("comments", JSON.stringify(
                Array.from(comments)
            ));
            warning.style.visibility = "hidden";
        } else {
            warning.style.visibility = "visible";
        }
    }

    document.getElementById("form-button-view-comments").onclick = () => {
        console.log(commentsToFilm);
        localStorage.setItem("commentsToFilm", JSON.stringify(commentsToFilm));
        window.location.href = "commentsfilm.html";
    }
}

initPage();