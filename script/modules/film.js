class Film {
    constructor(title, country) {
        this.title = title;
        this.country = country;
    }

    getFilm() {
        return new Film();
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

    setScenarists(scenarists) {
        this.scenarists = scenarists;    
    }

    setProducer(producer) {
        this.producer = producer;
    }

    setOperator(operator) {
        this.operator = operator;
    }

    setBudget(budget) {
        this.budget = budget;
    }

    getNormalListInit() {

    }
}

