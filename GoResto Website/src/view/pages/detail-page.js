/* eslint-disable no-console */
/* eslint-disable no-const-assign */
/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
import TheRestoDbSource from "../../data/restodb-source";
import UrlParser from "../../routes/url-parser";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import {
  createRestoDetailTemplate,
  createDetailReviewTemplate,
  createLikeRestoButtonTemplate,
} from "../templates/template-creator";

const DetailPage = {
  async render() {
    return `
        <div class="resto__detail" id="restoDetail"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailRestoItem(url.id);
    const detailContainer = document.querySelector("#restoDetail");
    detailContainer.innerHTML += createRestoDetailTemplate(resto);
    detailContainer.innerHTML += createDetailReviewTemplate(resto);

    const userName = document.querySelector("#userName");
    const userComment = document.querySelector("#userComment");
    const submitReviewButton = document.querySelector("#submitReview");

    submitReviewButton.addEventListener("click", async () => {
      if (userName.value === "" || userComment.value === "") {
        alert("Please Fill the Review Form");
        userName.value = "";
        userComment.value = "";
      } else {
        const review = {
          id: resto.restaurant.id,
          name: userName.value,
          review: userComment.value,
        };

        const addReview = await TheRestoDbSource.addReview(review);
        console.log(addReview);
        console.log("addReview working");
      }
    });

    const likeButtonContainer = document.querySelector("#likeButtonContainer");
    likeButtonContainer.innerHTML += createLikeRestoButtonTemplate();

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        pictureId: resto.restaurant.pictureId,
        city: resto.restaurant.city,
        rating: resto.restaurant.rating,
        description: resto.restaurant.description,
      },
    });
  },
};

export default DetailPage;
