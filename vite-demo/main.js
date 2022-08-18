import "./style.css";
import buttonStyles from "./button.module.css";
import imageStyles from "./image.module.css";
import img from "./foto-Diana.png";
import data from "./data.json";
import suma from "./suma.ts";

console.log(`suma de 2 y 3 es: ${suma(2, 3)}`);

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello Enrique. Nice to see you again!</h1>
    <button id='btn'>Click!</button>
    <img id='img'/>
    <pre>${JSON.stringify(data.user)}</pre>
  </div>

`;

document.getElementById("btn").className = buttonStyles.btn;
const imagen = document.getElementById("img");
imagen.src = img;
imagen.className = imageStyles.img;
