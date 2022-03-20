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

//openbreweryapi
const apiUrl = 'https://api.openbrewerydb.org/breweries/search?query=goose';
async function getBrew() {
  const response = await fetch(apiUrl);
  const data= await response.json();
  const {postal_code, brewery_type } = data;
  console.log(data);
}

document.querySelector('.is-success').addEventListener("click", ()=>getBrew());
