/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import FavouriteRestoIdb from "../src/data/favouriteresto-idb";
import * as TestFactories from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Unliking A restaurant", () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavouriteRestoIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavouriteRestoIdb.deleteRestaurant(1);
  });

  it("should display unlike button widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeTruthy();
  });

  it("should not display like button widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeFalsy();
  });

  it("should be able to remove liked restaurant from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event("click"));

    expect(await FavouriteRestoIdb.getAllRestaurants()).toEqual([]);
  });

  it("should not throw error if the unliked restaurant is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavouriteRestoIdb.deleteRestaurant(1);

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event("click"));

    expect(await FavouriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
});
