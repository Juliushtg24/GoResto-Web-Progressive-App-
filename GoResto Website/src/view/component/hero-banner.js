/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class HeroBanner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="hero__banner">
        <div class="hero__inner">
          <h1 tabindex="0" class="wow bounceInUp hero__title">
            Welcome to The GoResto Website
          </h1>
          <p tabindex="0" class="hero__tagline">
            The best food Restaurant recommendation in Indonesia
          </p>
          <a tabindex="0" class="hero__link" href="#exploreTitle">Explore Now!</a>
        </div>
        </section>
        `;
  }
}

customElements.define("hero-banner", HeroBanner);
