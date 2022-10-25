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
            image: "img/whoareyoulogo.jpg",
            // imageWhoAre: "img/whoareyoulogo.jpg",
            imageOhItsYou: "img/post-26450-0-02999100-1402274672.jpg"


        }
    },
    methods: {
        greet: function () {
            if (this.userNickName) {
                this.greetingMessage = `Ciao ${this.userName} ${this.userLastName} detto anche ${this.userNickName}!`
                this.image = this.imageOhItsYou
            } else {
                this.greetingMessage = `Ciao ${this.userName} ${this.userLastName}!`
                this.image = this.imageOhItsYou
            }

        }
    }

}).mount("#app");