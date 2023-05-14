/* eslint-disable quotes */
/* eslint-disable require-jsdoc */
import menu from "./menu.js";

function home() {
  console.log("wtAf");
  const testdiv = document.getElementById("content");
  testdiv.innerHTML = "";
  testdiv.className = "homepage";

  let header = document.createElement("H1");
  header.innerHTML = "COME TO DELICIOUS RESTAURANT";

  let copy = document.createElement("p");
  copy.innerHTML = "Fancy Shmancy copy about how great this restaurant is";

  let img = document.createElement("img");
  img.className = "burgertown";
  img.src = 'icon.png';

  let button = document.createElement("button");
  button.className = "button";
  button.innerHTML = "ORDER NOW!!!!";
  button.onclick = menu;

  testdiv.appendChild(header);
  testdiv.appendChild(copy);
  testdiv.appendChild(img);
  testdiv.appendChild(button);
  return testdiv;
}

export default home;

/* <h1>COME TO DELICIOUS RESTAURANT</h1>
<p>Fancy Shmancy copy about how great this restaurant is</p>
<img src="" alt="">
<button class="button" id="menu">order now!</button>
<p>copyright metapersona 2023</p> */