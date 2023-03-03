const adviceNum = document.querySelector('.advice-id')
const adviceQuote = document.querySelector('.advice-quote')
const diceBtn = document.querySelector('.dice-btn')

// Generate Advice when window loads
window.addEventListener("DOMContentLoaded", () => {
    generateAdvice();
});
// refreshes advice when dice button is clicked
diceBtn.addEventListener("click", generateAdvice);

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
        .then()
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
  
function displayData(data) {
    adviceNum.innerHTML = `${data.slip.id}`;
    adviceQuote.innerHTML = `"${data.slip.advice}"`;

}