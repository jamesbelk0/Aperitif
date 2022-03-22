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

//user input variables
var userFormEl = document.querySelector("#cityname");
var cityInputEl = document.querySelector("#submituser");
var brewCardEl = document.querySelector("#repos-container");

var formSubmitHandler = function (event) {
  //Prevent page from refreshing
  event.preventDefault();
  //get value from input (cityinput)
  var userInput = cityInputEl.value.trim();

  var getBrew = function (user) {
  // format the github api url
  var apiUrl = "https://api.openbrewerydb.org/breweries?by_city=" + userInput;
  console.log(apiUrl);
``
  if (userInput) {
    getBrew();
    //clear old content
    brewCardEl.textcontent = '';
    cityInputEl.value = '';
  } else {
    alert("Please enter a city name");
  }

  // request to the url
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayBrew(data, user)
        })
      }
    })
}
};
userFormEl.addEventListener("#submituser", formSubmitHandler);