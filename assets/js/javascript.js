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
document.querySelector('.is-success').addEventListener("click", () => getBrew(), modal.classList.remove('is-active'));

//user input variables
var userFormEl = document.querySelector("#cityname");
var cityInputEl = document.querySelector("#cityname");
var brewCardEl = document.querySelector("#repos-container");

var formSubmitHandler = function (event) {
  //Prevent page from refreshing
  event.preventDefault();
  //get value from input (cityinput)
  var postalCode = cityInputEl.value.trim();

  if (postalCode) {
    getBrew(postalCode);

    //clear old content
    brewCardEl.textcontent = '';
    cityInputEl.value = '';
  } else {
    alert("Please enter a zipcode");
  }
};
//fetch api (openbrewDb)
var getBrew = function (user) {
  // format the github api url
  var apiUrl = "https://api.openbrewerydb.org/breweriesbreweries/search?query=" + userFormEl + "/";
  
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

userFormEl.addEventListener("submit", formSubmitHandler);

