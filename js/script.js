// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;

createApp({
    data() {
        return {
            userName: "",
            userLastName: "",
            userNickName: "",
            greetingMessage: "",

        }
    },
    methods: {
        greet: function () {
            if (this.userNickName) {
                this.greetingMessage = `Ciao ${this.userName} ${this.userLastName} detto anche ${this.userNickName}!`
            } else {
                this.greetingMessage = `Ciao ${this.userName} ${this.userLastName}!`
            }
        }
    }

}).mount("#app");