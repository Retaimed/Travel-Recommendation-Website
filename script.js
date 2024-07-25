console.log("script running");
// Select the input elements!
const exploreSearch = document.querySelector("#explore-search");
const eatSearch = document.querySelector("#eat-search");
const doSearch = document.querySelector("#do-search");

// Select the go cards
const shinjuku = document.querySelector("#explore-1");
const ueno = document.querySelector("#explore-2");
const harajuku = document.querySelector("#explore-3");

// Select the eat cards
const shabu = document.querySelector("#eat-1");
const okonomiyaki = document.querySelector("#eat-2");
const gyudon = document.querySelector("#eat-3");

// Select the do cards
const wheel = document.querySelector("#do-1");
const ghibli = document.querySelector("#do-2");
const onsen = document.querySelector("#do-3");
const mountain = document.querySelector("#do-4");


exploreSearch.addEventListener('input', e => {
  let choice = e.target.value;
  let result = handleChoice(choice);
  if (result === "found!") {
    e.target.value = "";
  }
})

eatSearch.addEventListener('input', e => {
  let choice = e.target.value;
  let result = handleChoice(choice);
  if (result === "found!") {
    e.target.value = "";
  }
})

doSearch.addEventListener('input', e => {
  let choice = e.target.value;
  let result = handleChoice(choice);
  if (result === "found!") {
    e.target.value = "";
  }
})

function handleChoice(choice) {
  if (choice.toLowerCase().includes("shopping")) {
    shinjuku.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("animals")) {
    ueno.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("sea sighting")) {
    harajuku.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("seafood")) {
    shabu.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("italian")) {
    okonomiyaki.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("mexican")) {
    gyudon.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("escape room")) {
    wheel.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("amusement park")) {
    ghibli.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("beach")) {
    onsen.classList.remove("hidden")
    return "found!";
  } else if (choice.toLowerCase().includes("mountain hike")) {
    mountain.classList.remove("hidden")
    return "found!";
  }
}