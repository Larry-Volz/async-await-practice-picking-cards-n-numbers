window.onload = function() {

    // axios.get(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    // .then(evt=> {
        
    //     return evt;
    // })
    // .then(evt2 => {

    //     let deckId = evt2.data.deck_id
        
    //     let btn = document.getElementsByTagName("button");
    //     btn[0].addEventListener("click", evt => {
            
    //         axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    //         .then(card => {
    //             if (card.data.remaining > 0){
    //                 chosenCard = card.data.cards[0].image;
    //                 document.querySelector("#flipOver").src=chosenCard;
    //                 console.log(card.data.remaining);
    //             } else {
    //                 alert ("You are out of cards!")
    //             }
    //         })
    //     })
    // })

    async function pickACard(){

        let deck = await axios.get(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
        let deckId = await deck.data.deck_id;
        let cards = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)

        let btn = document.getElementsByTagName("button");
            btn[0].addEventListener("click", async function(evt) {
                
                cards = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)

                if (cards.data.remaining > 0){
                    chosenCard = cards.data.cards[0].image;
                        document.querySelector("#flipOver").src=chosenCard;
                        console.log(cards.data.remaining);
                    } else {
                        alert ("You are out of cards!")
                    }


        await console.log(chosenCard);


    })
}

    pickACard();

}
