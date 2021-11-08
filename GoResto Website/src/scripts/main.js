import data from "../DATA.json";

const main = () => {
  const renderItem = (restos) => {
    const restolist = document.querySelector("#restoList");
    restolist.innerHTML = ``;

    restos.restaurants.forEach((resto) => {
      restolist.innerHTML += `
      <article class="resto__item">
        <img
          tabindex="0"
          class="resto__image"
          src="${resto.pictureId}"
          alt="${resto.name} Image Restaurant"
        />
        <h3 tabindex="0" class="resto__title">${resto.name}</h3>
        <h4 tabindex="0" class="resto__location">Location: ${resto.city}</h4>
        <h5 tabindex="0" class="resto__rating"><span>&#9733;</span> ${resto.rating} / 5</h5>
        <p tabindex="0" class="resto__desc"> ${resto.description}</p>
      </article>
      `;
    });
  };

  renderItem(data);
};

export default main;
