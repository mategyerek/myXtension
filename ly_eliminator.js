function pun() {
  try {
    Array.from(document.getElementsByTagName("span", "div")).forEach((el) => {
      if (el.innerText.includes("ly")) {
        console.log(el.innerText);
        el.innerHTML = el.innerHTML.replaceAll("ly", "j");
      }
    });
  } catch (err) {
    console.log(err);
  }
}
window.onload = setInterval(pun, 2500);
