/* eslint-disable no-undef */
const assert = require("assert");

Feature("Liking Resto");

Before(({ I }) => {
  I.amOnPage("/#/favourite");
});

Scenario("display empty liked restaurants", ({ I }) => {
  I.dontSeeElement(".resto__item");
});

Scenario("liking one restaurant", async ({ I }) => {
  I.dontSeeElement(".resto__item");

  I.amOnPage("/");

  I.seeElement(".resto__title a");

  const firstResto = locate(".resto__title a").first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.click(firstResto);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favourite");
  I.seeElement(".resto__item");
  const likedRestoTitle = await I.grabTextFrom(".resto__title");

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
