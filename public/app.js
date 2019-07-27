var app = new Vue({
    el: '#app',
    data() {
        return {
            driver: "",
            plate: "",
            regions: [
                {
                    id: 1,
                    name: "Region I",
                    char: "A"
                },
                {
                    id: 2,
                    name: "Region II",
                    char: "B"
                },
                {
                    id: 17,
                    name: "NCR",
                    char: "P"
                }
            ],
            region: null,
            date: null,
            firstnames: [
                "Allan",
                "Bryan",
                "Eric",
                "John",
                "Rey"
            ],
            lastnames: [
                "Gomez",
                "Bartolme",
                "Perez",
                "Villanueva",
                "Dela Vega"
            ]
        }
    },
    methods: {
        generatePlate(e) {
            const alphabet = 26;
            let firstname = this.firstnames[this.getRandom(this.firstnames)];
            let lastname = this.lastnames[this.getRandom(this.lastnames)];
            this.driver = `${firstname} ${lastname}`;
            this.plate = `${this.regions[this.region].char}${this.getRandomChar()} ${this.plateNumbers()}`;
        },
        getRandom(limit) {            
            return Math.floor((Math.random() * (limit.length - 1)));
        },
        getRandomChar() {
            let chars = "";
            for (i = 0; i < 2; i++) {
                code = Math.floor((Math.random() * 25) + 65);
                console.log("code: ", code);
                chars += String.fromCharCode(code);                    
            }
            return chars;
        },
        plateNumbers() {
            return Math.floor((Math.random() * 899 ) + 100 );
        }
    },
    computed: {
        isDisabled: function() {
            return this.region === null;
        }
    }
});

flatpickr("#date", {});