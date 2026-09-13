const bulb = document.getElementById("bulb");

let lightOn = true;

bulb.addEventListener("click", () => {
  bulb.setAttribute("fill", lightOn ? "transparent" : "gold");
  lightOn = !lightOn;
});
