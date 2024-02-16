let resultsContainer = document.getElementById("results-div");
let resetBtn = document.getElementById("resetBtn");
let searchBtn = document.getElementById("searchBtn");
let input = document.getElementById("CountrieName");
let countiresUsingEuro = document.getElementById("countiresUsingEuro");
let macedoniaBtn = document.getElementById("macedoniaBtn");
let countriesUsingEnglish = document.getElementById('countriesUsingEnglish')
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
        <h3> Population: ${data.population}</h3>
        <h3> Capital: ${data.capital}</h3>
        <h3> Area: ${data.area}</h3>
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

//Za ovaj button codov ne mi rabotit neznam zosto probav sekako
countiresUsingEuro.addEventListener("click", async function () {
  try {
    resultsContainer.innerHTML = "";
    let res = await fetch(`https://restcountries.com/v3.1/all`);
    let data = await res.json();

    // Iterate over each country
    data.forEach((country) => {
      // Check if currencies is an object and has a property 'EUR'
      if (typeof country.currencies === "object" && country.currencies.EUR) {
        createCard(country); // Create card for the country
      }
    });
  } catch (error) {
    console.log(error);
  }
});

macedoniaBtn.addEventListener("click", async function () {
  try {
    resultsContainer.innerHTML = "";
    let res = await fetch(`https://restcountries.com/v3.1/all`);
    let data = await res.json();
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.common === "North Macedonia") {
        console.log(data[i]);
        createCard(data[i]);
      }
    }
  } catch (error) {
    console.log(error);
  }
});

countriesUsingEnglish.addEventListener('click', async function () {
  try {
    resultsContainer.innerHTML = "";
    let res = await fetch(`https://restcountries.com/v3.1/all`);
    let data = await res.json();
    data.forEach(country => {
      if (country.languages.eng) {
        createCard(country);
      }
    });
  } catch (error) {
    console.log(error);
  }
});
resetBtn.addEventListener('click' ,async function(){
  resultsContainer.innerHTML = "";
  let res = await fetch(`https://restcountries.com/v3.1/all`);
    let data = await res.json();
    console.log(data);
    data.forEach((data) => createCard(data))
})