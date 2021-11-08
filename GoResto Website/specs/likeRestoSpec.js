/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import FavouriteRestoIdb from "../src/data/favouriteresto-idb";
import * as TestFactories from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Liking A restaurant", () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show like button when restaurant has not been liked in first place", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like the resto"')).toBeTruthy();
  });

  it("should not show unlike button when the restaurant has not been liked before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike the resto"')
    ).toBeFalsy();
  });

  it("should be able to like the restaurant", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const resto = await FavouriteRestoIdb.getRestaurant(1);

    expect(resto).toEqual({ id: 1 });

    FavouriteRestoIdb.deleteRestaurant(1);
  });

  it("should not add a restaurant again when its already liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavouriteRestoIdb.putRestaurant({ id: 1 });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await FavouriteRestoIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavouriteRestoIdb.deleteRestaurant(1);
  });

  it("should not add a restaurant when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavouriteRestoIdb.getAllRestaurants()).toEqual([]);
  });
});
