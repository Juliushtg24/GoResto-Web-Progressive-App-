import TheRestoDbSource from "../../data/restodb-source";
import { createRestoItemTemplate } from "../templates/template-creator";

const HomePage = {
  async render() {
    return `
      <hero-banner></hero-banner>
      <h2 tabindex="0" class="explore__title" id="exploreTitle">
          Explore The Restaurant
      </h2>
      <section class="resto" id="restoList">
      <!-- Resto Item Container-->
      </section>
      `;
  },

  async afterRender() {
    const restos = await TheRestoDbSource.homeRestoList();
    const restoContainer = document.querySelector("#restoList");
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default HomePage;
