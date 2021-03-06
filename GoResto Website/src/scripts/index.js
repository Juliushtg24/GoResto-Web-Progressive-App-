import "regenerator-runtime";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit"; /* for async await transpile */
import "../styles/main.css";
import "../styles/accessible.css";
import "../styles/responsive.css";
import App from "../view/App";
import swRegister from "../utils/sw-register";

const app = new App({
  button: document.querySelector("#menu"),
  drawer: document.querySelector("#drawer"),
  content: document.querySelector("main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
