function pun() {
  try {
    Array.from(document.getElementsByTagName("span", "div")).forEach((el) => {
      if (el.innerText == "Visszavontál egy üzenetet.") {
        //console.log(el.innerHTML);
        el.innerHTML = el.innerHTML.replace(
          "Visszavontál egy üzenetet.",
          "Visszavontál egy üzenet."
        );
      }
    });
  } catch (err) {
    console.log(err);
  }
}
window.onload = setInterval(pun, 3000);
