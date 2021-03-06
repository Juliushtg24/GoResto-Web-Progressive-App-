/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from "../../src/utils/like-button-presenter";

const createLikeButtonPresenterWithRestaurant = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    resto,
  });
};

export { createLikeButtonPresenterWithRestaurant };
