class Film {
    /*constructor(fields) {
        console.log(fields.length);
        let func = this.getNormalListInit();
        for (let i = 0; i < fields.length; i++) {
            func[i].call(this,fields[i]);
        }
    }*/

    constructor(
        title, country,
        genre, directors, scripts, producer,
        operator, compositor, budget, boxOffice,
        ageRate, duration, date, poster) {
            this.title = title;
            this.country = country;
            this.genre = genre;
            this.directors = directors;
            this.scripts = scripts;
            this.producer = producer;
            this.operator = operator;
            this.compositor = compositor;
            this.budget = budget;
            this.boxOffice = boxOffice;
            this.ageRate = ageRate;
            this.duration = duration;
            this.date = date;
            this.poster = poster;
    }

    setTitle(title) {
        this.title = title;
    }

    setCountry(country) {
        this.country = country;
    }

    setGanre(ganre) {
        this.ganre = ganre;
    }

    setDirectors(directors) {
        this.directors = directors;
    }

    setScripts(scripts) {
        this.scripts = scripts;
    }

    setProducer(producer) {
        this.producer = producer;
    }

    setOperator(operator) {
        this.operator = operator;
    }

    setCompositor(compositor) {
        this.compositor = compositor;
    }

    setBudget(budget) {
        this.budget = budget;
    }

    setBoxOffice(boxOffice) {
        this.boxOffice = boxOffice;
    }

    setAgeRate(ageRate) {
        this.ageRate = ageRate;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    setDate(date) {
        this.date = date;
    }

    setPoster(poster) {
        this.poster = poster;
    }

    toArray() {
        return [
            this.title,
            this.country,
            this.genre,
            this.directors,
            this.scripts,
            this.producer,
            this.operator,
            this.compositor,
            this.budget,
            this.boxOffice,
            this.ageRate,
            this.duration,
            this.date, 
            this.poster
        ]
    }
}

