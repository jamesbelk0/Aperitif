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
const userFormEl = document.querySelector("#zip");
const zipInputEl = document.getElementById("#zip");
const repoContainerEl = document.querySelector('#repos-container');
const repoSearchTerm = document.querySelector('#repo-search-term');

const formSubmitHandler = function (event) {
  event.preventDefault();
  
  const userInput = zipInputEl.value.trim();
console.log(zipInputEl);
  if (userInput) {
    getBrew();

    repoContainerEl.textContent = '';
   zipInputEl.value = '';
  } else {
    alert('Please enter a city!');
  }
};

  const getBrew = function (user) {
    // format the github api url
    const apiUrl = "https://api.openbrewerydb.org/breweries?by_postal=" + userInput;

    fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to OpenBrew');
    });
  };
    console.log(getBrew);
  //   if (apiUrl) {
  //     getBrew();
  //     //clear old content
  //     brewCardEl.textcontent = '';
  //     zipInputEl.value = '';
  //   } else {
  //     alert("Please enter a city name");
  //   }
  // };


// cityInputEl.addEventListener("click", getBrew());

