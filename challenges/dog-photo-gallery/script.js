const API_URL = "https://dog.ceo/api/breeds/image/random"
const btnEl = document.querySelector('button');
const ulEL = document.querySelector('ul');

let breedRegex = new RegExp('\/breeds\/([^/]+)\/');

function showPhoto() {
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
                
        const listEl = document.createElement('li');
        ulEL.appendChild(listEl);

        const titleEl = document.createElement('h1');
        titleEl.innerText = data.message.match(breedRegex)[1];
        listEl.appendChild(titleEl);
        
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', data.message);
        listEl.appendChild(imgEl);
        
    })
    .catch((err) => console.error(err));
}
btnEl.addEventListener('click', showPhoto);