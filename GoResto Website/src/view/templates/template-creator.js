/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from "../../global/config";

const createRestoDetailTemplate = (resto) => `
    <h2 tabindex="0" class="detail__title">${resto.restaurant.name}</h2>
    <img tabindex="0" class="detail__poster lazyload" src="${
      CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId
    }" alt="${resto.restaurant.name}" />
    <div class="detail__info">
    <h3 tabindex="0">Information Restaurant</h3>
      <h4 tabindex="0">City</h4>
      <p tabindex="0">${resto.restaurant.city}</p>
      <h4 tabindex="0">Address</h4>
      <p tabindex="0">${resto.restaurant.address}</p>
      <h4 tabindex="0">Foods Menu</h4>
      <p tabindex="0">${resto.restaurant.menus.foods.map(
        (food) => food.name
      )}</p>
      <h4 tabindex="0">Drinks Menu</h4>
      <p tabindex="0">${resto.restaurant.menus.drinks.map(
        (drink) => drink.name
      )}</p>
      <h4 tabindex="0">Rating</h4>
      <p tabindex="0"><span>&#9733;</span>${resto.restaurant.rating}/5</p>
    </div>
    <div class="detail__desc">
      <h3 tabindex="0">Description</h3>
      <p tabindex="0">${resto.restaurant.description}</p>
    </div>
  `;

const createDetailReviewTemplate = (resto) => ` 
  <h3 tabindex="0" class="review__title">User Reviews</h3>
  <form id="formReview" class="review__form">
    <label tabindex="0" for="userName">Name :</label><br>
    <input type="text" id="userName" name="fname"><br>
    <label  tabindex="0" for="userComment">Comment:</label><br>
    <input type="text" id="userComment" name="userComment"><br>
    <input type="submit" value="Submit" id="submitReview">
  </form>
    ${resto.restaurant.customerReviews
      .map(
        (customer) => `
      <div tabindex="0" class="review__item">
        <div tabindex="0" class="review__desc">
          <h3 tabindex="0" ><i class="user fa fa-user"></i>${customer.name}</h3>
          <h4 tabindex="0">${customer.date}</h3>
          <p tabindex="0">${customer.review}</h3>
        </div>
      </div>
    `
      )
      .join("")}
  `;

const createRestoItemTemplate = (resto) => `
    <article class="resto__item">
    <img
      tabindex="0"
      class="resto__image lazyload"
      data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM}${resto.pictureId}"
      alt="${resto.name} Image Restaurant"
    />
    <h3 tabindex="0" class="resto__title"><a href="${`/#/detail/${resto.id}`}">${
  resto.name
}</a></h3>
    <h4 tabindex="0" class="resto__location">Location: ${resto.city}</h4>
    <h5 tabindex="0" class="resto__rating"><span>&#9733;</span> ${
      resto.rating
    } / 5</h5>
    <p tabindex="0" class="resto__desc"> ${resto.description}</p>
    </article>
  `;

const createLikeRestoButtonTemplate = () => `
<button aria-label="like the resto" id="likeButton" class="like">
   <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createUnlikeRestoButtonTemplate = () => `
<button aria-label="unlike this resto" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createDetailReviewTemplate,
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
