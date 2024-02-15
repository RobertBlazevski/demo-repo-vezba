let resultsContainer = document.getElementById("results-div");
let resetBtn = document.getElementById("resetBtn");
let searchBtn = document.getElementById("searchBtn");
let input = document.getElementById("CountrieName");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      console.log(element);
      createCard(element);
    });
  });

function createCard(data) {
  resultsContainer.innerHTML += `
    <div class="card">
      <div class="inCard">
        <img src="${data.flags.png}" />
        <h2>${data.name.common}</h2>
      </div>
    </div>`;
}

searchBtn.addEventListener("click", async function () {
  try {
    let inputValue = input.value;
    resultsContainer.innerHTML = "";
    let res = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`);
    let data = await res.json();
    data.forEach((element) => createCard(element));
  } catch (error) {
    console.log(error);
  }
});
