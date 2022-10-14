const container = document.querySelector('.js-container');
const form = document.querySelector('.js-form');
const inputField = document.querySelector('[name=data]');

function getApiUrl(userName) {
    return `https://api.github.com/users/${userName}/repos`;
}

function toJs(data) {
    return data.json();
} 

function processData(data) {
    let html = '<ul>';
    for (let repo of data) {
        html += `<li>${repo.name}</li>`;
    }
    html += '</ul>';
    container.innerHTML = html;
} 

function errorHandler() {
    container.innerHTML = '<p class="error">Error fetching data.</p>';
}

function formSubmitted(event) {
    event.preventDefault();
    let userName = inputField.value;  // get the user name from our input field
    let apiUrl = getApiUrl(userName);
    fetch(apiUrl)     // get data from API URL
        .then(toJs)   // convert it to JavaScript object
        .then(processData) // convert the object to HTML markup and render it
        .catch(errorHandler); // handle (catch) any errors that come 
}

form.addEventListener('submit', formSubmitted);





