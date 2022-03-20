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
document.querySelector('.is-success').addEventListener("click", () => getBrew());

//user input variables
window.addEventListener('DOMContentLoaded', function () {
  var postalInput = document.getElementById('postalCode');
  var breweryInput = document.getElementById('dropdown');

  function getUrl(e) {
    var pi = postalInput.value;
    var bt = breweryInput.value;
    var url = apiUrl + pi + "/" + bt + ".html";
  };
});
//openbreweryapi
const apiUrl = 'https://api.openbrewerydb.org/breweries/search?query=';
async function getBrew() {
  const response = await fetch(url);
  const data = await response.json();
  const { breweryInput, postalInput } = data;
  console.log(data);
}



console.log(postalCode);
console.log(dropdown);