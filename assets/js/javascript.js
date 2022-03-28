// modal click to open
const steponeButton = document.querySelector('#stepOne');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

// close if click out of modal
steponeButton.addEventListener('click', () => {
  modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

//modal 'save changes' click
document.querySelector('.button').addEventListener("click", modal.classList.remove('is-active'));

// user input
function getInputValue() {
  const user = document.getElementById('myInput').value;
  e.preventDefault();
  console.log(user);
};

//fetch on click

$("#apiUrl").submit(function (e) {
  e.preventDefault();

  const url = "https://api.openbrewerydb.org/breweries?by_postal="
  const user = document.getElementById('myInput').value;
  const apiUrl = url + user;
  console.log(apiUrl);
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const cards = $('#cards');
      // for loop for multiple cards
      for (let i = 0; i < data.length; i++) {
        var card = data[i]
        cards.append(`<div id="location" class="column is-one-half">
    
        <div id="repos-container" class="card"></div>
        <h3 class="name">${card.name} <button class="button favorite">Favorite</button></h3>
        <ul class="pullData">
          <li id="street">${card.street}</li>
          <li class="city">${card.city}</li>
          <li class="phone">${card.phone}</li>
          <li class="website"><a href="${card.website_url}">${card.website_url}</a></li>
        </ul>
      </div>
      `)
      }
    })

      .catch ((error) => {
        console.error(error);
      });
});

//     localStorage.setItem(apiUrl, JSON.stringify(favorite));
//   };
// });
console.log(localStorage);
