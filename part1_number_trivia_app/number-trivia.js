let numForm = document.querySelector('#numForm');
numForm.addEventListener("submit", event => {
    event.preventDefault();
    
    let faveNum = document.querySelector('#faveNumber').value;
    console.log(faveNum);

    document.querySelector("#displayArea h2").innerText=faveNum

    // axios.get(`http://numbersapi.com/${faveNum}/trivia `)
    // .then(res => {
    //     console.log(res);
    //     return res.data;
    // })
    // .then (res => {
    //     document.querySelector("#displayArea p").innerText=res;
    // })
    // .catch(res => console.log("oops - there was a problem"));

    //SOLUTION VERSION TWO WITH ASYNC/AWAIT

    async function getTrivia(faveNum) {
        let trivia = await axios.get(`http://numbersapi.com/${faveNum}/trivia `);
        document.querySelector("#displayArea p").innerText=trivia.data;
        return true;
    }

    getTrivia(faveNum);
})

