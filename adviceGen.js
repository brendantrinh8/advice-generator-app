const adviceNum = document.getElementById('advice-id')
const adviceQuote = document.getElementById('advice-quote')

function generateAdvice() {
    const url = 'https://api.adviceslip.com/advice';

    fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

generateAdvice()    
function displayData(data) {
    adviceNum.innerText = data.slip.id;
    adviceQuote.innerText = data.slip

}