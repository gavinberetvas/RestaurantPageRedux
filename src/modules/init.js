/* eslint-disable quotes */
/* eslint-disable require-jsdoc */
import menu from "./menu.js";
import home from "./home.js";
import contact from "./contact.js";

function buttonStandby() {

  document.getElementById("home").addEventListener("click", function() {
    document.body.append(home());
  });

  document.getElementById("menu").addEventListener("click", function() {
    document.body.append(menu());
  });

  document.getElementById("contact").addEventListener("click", function() {
    document.body.append(contact());
  });
}

export default buttonStandby;
