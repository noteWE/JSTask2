

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

/*

[["Матрица",{"title":"Матрица","country":"США","genre":["боевик","фантастика"],"directors":" Лана Вачовски, Лилли Вачовски","scripts":" Лана Вачовски, Лилли Вачовски","producer":" Джоэл Силвер, Брюс Берман, Дэн Краччиоло","operator":" Билл Поуп","compositor":" Дон Дэвис","budget":"63 000 000","boxOffice":"463 517 383","ageRate":"16","duration":"136","date":"1999-03-24","poster":"https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/eed1de3a-5400-43b3-839e-22490389bf54/300x450"}],["Бегущий по лезвию",{"title":"Бегущий по лезвию","country":"США","genre":["драма","триллер","фантастика"],"directors":"  Ридли Скотт","scripts":"  Хэмптон Фанчер, Дэвид Уэбб Пиплз, Филип К. Дик","producer":"  Чарльз де Лозирика, Майкл Дили, Хэмптон Фанчер","operator":" Джордан Кроненвет","compositor":"Вангелис","budget":"28 000 000","boxOffice":"27 615 743","ageRate":"16","duration":"117","date":"1982-06-25","poster":"https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/ffa0729b-8587-47e8-b4de-3f8a2c61e218/300x450"}],[" Крепкий орешек",{"title":" Крепкий орешек","country":"США","genre":["боевик","криминал","триллер"],"directors":"Джон МакТирнан","scripts":"Джеб Стюарт, Стивен Е. де Соуза, Родерик Торп","producer":"Лоуренс Гордон, Джоэл Силвер, Чарльз Гордон","operator":"Ян де Бонт","compositor":"Майкл Кэмен","budget":"28 000 000","boxOffice":"140 767 956","ageRate":"16","duration":"133","date":"1988-07-12","poster":"https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/f55f782b-2dcd-4e4c-be87-0cc13333f857/300x450"}],["Скорость",{"title":"Скорость","country":"США","genre":["боевик","приключения","триллер"],"directors":"Ян де Бонт","scripts":"Грэм Йост","producer":"Марк Гордон, Йен Брайс, Эллисон Лион Сеган","operator":"Анджей Бартковяк","compositor":"Марк Манчина","budget":"30 000 000","boxOffice":"350 448 145","ageRate":"16","duration":"116","date":"1994-06-07","poster":"https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/9a6ff2f8-dda6-4e22-b0c6-88ae75a03e2a/300x450"}],["Назад в будущее",{"title":"Назад в будущее","country":"США","genre":["комедия","приключения","фантастика"],"directors":"Роберт Земекис","scripts":"Роберт Земекис, Боб Гейл","producer":"Нил Кэнтон, Боб Гейл, Кэтлин Кеннеди","operator":"Дин Канди","compositor":"Алан Сильвестри","budget":"19 000 000","boxOffice":"381 109 762","ageRate":"12","duration":"116","date":"1985-07-03","poster":"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/73cf2ed0-fd52-47a2-9e26-74104360786a/300x450"}],["Грань будущего",{"title":"Грань будущего","country":"США, Канада","genre":["боевик","приключения","фантастика"],"directors":"Даг Лайман","scripts":"Кристофер МакКуорри, Джез Баттеруорт, Джон-Генри Баттеруорт","producer":"Джейсон Хоффс, Грегори Джейкобс, Том Лассалли","operator":"Дион Биби","compositor":"Кристоф Бек","budget":"178 000 000","boxOffice":"370 541 256","ageRate":"12","duration":"113","date":"2014-05-28","poster":"https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/59acece0-e900-4914-aa8a-ec5f42026a64/300x450"}],["Настоящий детектив (сериал 2014 – 2019)",{"title":"Настоящий детектив (сериал 2014 – 2019)","country":"США","genre":["детектив","драма","криминал","триллер"],"directors":"Кэри Фукунага, Дэниэл Сакхайм, Джон Краули","scripts":"Ник Пиццолатто, Scott Lasser, Грэм Горди","producer":"Ричард Браун, Ли Кэплин, Кэри Фукунага","operator":"Найджел Блак, Адам Аркпоу, Джермейн МакМикинг","compositor":"Ти-Боун Бёрнетт, Кифес Чанция","budget":"-","boxOffice":"-","ageRate":"18","duration":"60","date":"2014-01-12","poster":"https://upload.wikimedia.org/wikipedia/ru/f/f2/%D0%9D%D0%B0%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B8%D0%B9_%D0%B4%D0%B5%D1%82%D0%B5%D0%BA%D1%82%D0%B8%D0%B2_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg"}],["Обливион",{"title":"Обливион","country":"США","genre":["боевик","драма","приключения","триллер","фантастика"],"directors":"Джозеф Косински","scripts":"Карл Гайдусек, Майкл Арндт, Джозеф Косински","producer":"Питер Чернин, Дилан Кларк, Дункан Хендерсон","operator":"Клаудио Миранда","compositor":"Энтони Гонсалес, M83, Джозеф Трапанезе","budget":"120 000 000","boxOffice":"286 168 572","ageRate":"12","duration":"125","date":"2013-03-26","poster":"https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/e73af80a-2fb8-4b7f-80a1-4a4f7106fe93/300x450"}]]

*/