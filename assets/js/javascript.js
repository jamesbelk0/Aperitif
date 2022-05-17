// modal click to open
const steponeButton = document.querySelector('#stepOne');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

// close if click out of modal
steponeButton.addEventListener('click', () => {
  modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

//modal 'save changes' click
document.querySelector('.button').addEventListener("click", modal.classList.remove('is-active'));

// dadjoke api
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
    'X-RapidAPI-Key': '0a428a9452mshf893f8c3b3d30efp19ce95jsna62e53438fac'
  }
};
fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const jokes = $('.jokes')
    for (let i = 0; i < data.body.length; i++) {
      var joke = data.body[i]
      jokes.append(`
        <ul class="pullData card" id="jokes">
      <li id="setup">Set-Up: ${joke.setup}</li>
      <li id="punchline">Punch-Line:${joke.punchline}</li>
    </ul>`);
    }
  });

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
        cards.append(`
        <div id="location" class="column is-one-half">
    
        <div id="repos-container" class="card"></div>
        <h3 class="name" input class="button favorite" type="submit" value="Favorite" onclick="favorite_button() id="favorites"">${card.name}</button>
        </h3>
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
});


