/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
const assert = require("assert");

Feature("Add Review Resto");

Scenario("Adding New Review to one restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.seeElement(".resto__item");
  I.seeElement(".resto__title a");

  const firstResto = locate(".resto__title a").first();
  I.click(firstResto);
  I.click(firstResto);

  I.seeElement("#userName");
  I.seeElement("#userComment");

  const userNameText = "user 1";
  const userCommentText = "test12345";

  I.fillField("#userName", userNameText);
  I.fillField("#userComment", userCommentText);

  I.seeElement("input[type=submit]");
  I.click("input[type=submit]");
  I.refreshPage();

  const userNameTexted = await I.grabTextFrom(
    locate(".review__desc h3").last()
  );
  const userCommentTexted = await I.grabTextFrom(
    locate(".review__desc p").last()
  );

  assert.equal(userNameText, userNameTexted);
  assert.equal(userCommentText, userCommentTexted);

  pause();
});
