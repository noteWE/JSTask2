function initPage() {
    let commentsToFilm = JSON.parse(localStorage.getItem("commentsToFilm"));

    let list = document.getElementById("comments-list");


    let film = JSON.parse(localStorage.getItem("selectedFilm"));

    document.getElementById("comments-header").innerHTML = film.title;

    commentsToFilm.forEach(element => {
        let comment = document.createElement("div");
        comment.className = "comment";
        let username = document.createElement("p");
        username.className = "comment-username";
        username.innerHTML = element.username;
        let text = document.createElement("p");
        text.className = "comment-text";
        text.innerHTML = element.text;
        comment.appendChild(username);
        comment.appendChild(text);
        list.appendChild(comment);
    });
}

initPage();