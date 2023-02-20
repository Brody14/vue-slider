//console.log('non ho idee')

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        slides: [
          {
            imgSrc: "./img/01.png",
            title: "Final Eight 2023",
            description:
              "Qualche curiosità sulla coppa (giusto per renderci conto che Milano non è così figa come finge di essere)",
          },
        
          {
            imgSrc: "./img/02.jpg",
            title: "Benetton Treviso",
            description:
              "La squadra che ha vinto il maggior numero di coppe, 5, una in più di Milano!",
          },
        
          {
            imgSrc: "./img/03.jpg",
            title: "Olimpia Milano",
            description:
              "La squadra che ha partecipato a più Final Eight (ben 18 edizioni, pensate la noia) per vincerne solo 4!",
          },
        
          {
            imgSrc: "./img/04.jpg",
            title: "Sassari - Pesaro, Final Eight 2021",
            description:
              "La partita (stupenda) con il punteggio più alto nella storia delle Final Eight con 225 punti totali",
          },
        
          {
            imgSrc: "./img/05.jpg",
            title: "Ettore Messina",
            description:
              "L'allenatore che ha vinto più coppe nella storia, 7 (il fatto che alleni Milano è solo un caso)",
          },
        
          {
            imgSrc: "./img/06.jpg",
            title: "Adrian Banks",
            description:
              "Ha realizzato il maggior numero di punti della storia delle Final Eight in una singola partita (37 - Final Eight 2020) e indovinate? Non giocava a Milano!",
          },
          {
            imgSrc: "./img/07.jpg",
            title: "Germani Brescia",
            description:
              "E niente, alla fine ha vinto Brescia (che per altro ha eliminato Milano al primo turno, eroi!)",
          },
        ]
      }
    }
  }).mount('#app')
