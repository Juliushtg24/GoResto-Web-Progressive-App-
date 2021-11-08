/* eslint-disable no-underscore-dangle */
import {
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
} from "../view/templates/template-creator";
import FavouriteRestoIdb from "../data/favouriteresto-idb";

const LikeButtonPresenter = {
  async init({ likeButtonContainer, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavouriteRestoIdb.getRestaurant(id);
    return !!resto;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await FavouriteRestoIdb.putRestaurant(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();
    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await FavouriteRestoIdb.deleteRestaurant(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
