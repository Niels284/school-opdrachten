// array met burgers
const burgers = [
  { name: "Big King XL", price: 5.95, picture: "bigking.png" },
  { name: "Bacon King XL", price: 6.15, picture: "baconking.png" },
  { name: "Crispy Chicken", price: 4.9, picture: "crispychicken.png" },
  { name: "King Pollo", price: 4.5, picture: "kingpollo.png" },
  { name: "Whopper", price: 3.95, picture: "whopper.png" },
  { name: "Angry Whopper", price: 5.2, picture: "whopperangry.png" },
];

function init() {
  const menu = document.querySelector(".menu");
  let sortedBurgers = burgers.sort((a, b) =>
    a.price > b.price ? 1 : a.price < b.price ? -1 : 0
  ); // sorteert de burgers op prijs ASC
  sortedBurgers.forEach((burger) => {
    // zet de data van de sortedBurgers in de li tag
    const burgerDiv = document.createElement("li");
    burgerDiv.className = "burger";
    burgerDiv.innerHTML = `
      <img src="img/${burger["picture"]}" alt="${burger["name"]}">
      <p>${burger["name"]}</p>
      <p>€ ${burger["price"]}</p>
   `;
    menu.appendChild(burgerDiv); // voegt de burgerDiv toe aan de unordered list met de class "menu" binnen de DOM.
  });
}
