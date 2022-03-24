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

// apiUrl and user input
const url = "https://api.openbrewerydb.org/breweries?by_postal="
const user = document.getElementById('zip').value;
const apiUrl = url + user;


getBrew = function getBrew() {
  //fetch on click
  $("#submituser").click(function () {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => console.log(data));

    // Defining async function
    async function getBrew(apiUrl) {
      // Storing response
      const response = await fetch(url);
      // Storing data in form of JSON
      const data = await response.json();
      console.log(data);
      $("#submituser").submit(function (e) {
        e.preventDefault();
      });

      localStorage.getBrew('name', 'phone', 'street', 'website');
    };
  });
};
console.log(localStorage);

// Calling that async function

