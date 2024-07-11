document.addEventListener('DOMContentLoaded', function() {
    fetchQuote();
});

function fetchQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerText = data.content;
            document.getElementById('author').innerText = `— ${data.author}`;
        })
        .catch(error => console.error('Error fetching data:', error));
}
