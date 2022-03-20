// modal click to open
const steponeButton = document.querySelector('#stepOne');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

steponeButton.addEventListener('click', () => {
  modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
});
//modal 'save changes' click
document.querySelector('.is-success').addEventListener("click", () => getUrl(url));

//user input variables
window.addEventListener('DOMContentLoaded', function getUrl() {
  var postalInput = document.getElementById('postalCode');
  var breweryInput = document.getElementById('dropdown');
  

  var pi = postalInput.value;
  var bt = breweryInput.value;
  const apiUrl = 'https://api.openbrewerydb.org/breweries?by_postal=';
  var url = apiUrl + pi + "/" + bt;

fetch(apiUrl, {
  "method": "GET",
  "headers": {
    "by_postal":"",
    "by_type": ""
  }
})
    .then(response => response.json())
    .then(data => console.log(data));
  
    async function getBrew() {
    const response = await fetch(url);
    const data = await response.json();
    const { breweryInput, postalInput } = data;
  }

getBrew();

});
//openbreweryapi

// Removed getUrl()
console.log(postalCode);
console.log(dropdown);