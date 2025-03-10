const results = document.querySelector(".results");

function createLi(name, content) {
  const li = document.createElement("li");
  li.textContent = name + ": " + content;

  return li;
}

function createCountry(countryData) {
  const countryCard = document.createElement("div");
  const countryFlag = document.createElement("img");
  const countryDetails = document.createElement("div");
  const countryName = document.createElement("h2");
  const countryUl = document.createElement("ul");

  countryCard.classList.add("country-card");
  countryCard.setAttribute("data-region", countryData.region);

  countryFlag.classList.add("country-flag");
  countryFlag.setAttribute("src", countryData.flags.svg);
  countryFlag.setAttribute("alt", countryData.flags.alt);

  countryDetails.classList.add("country-details");

  countryName.textContent = countryData.name.official;

  const populationLi = createLi(
    "Population",
    countryData.population.toLocaleString()
  );
  const regionLi = createLi("Region", countryData.region);
  const capitalLi = createLi("Capital", countryData.capital);

  countryUl.appendChild(populationLi);
  countryUl.appendChild(regionLi);
  countryUl.appendChild(capitalLi);

  countryDetails.appendChild(countryName);
  countryDetails.appendChild(countryUl);

  countryCard.appendChild(countryFlag);
  countryCard.appendChild(countryDetails);

  results.appendChild(countryCard);
}

fetch("https://restcountries.com/v3.1/all")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    data.forEach(function(country) {
        createCountry(country);
    })
  })
  .catch(function (err) {
    console.log("une erreur est survenue", err);
  });