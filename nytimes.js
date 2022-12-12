//cache article
window.onload = () => {
  try {
    story = document.getElementById("story").innerHTML;
    init();
  } catch {
    console.log("No story");
  }
};

function init() {
  //wait for block to appear
  var iter = 0;
  k = setInterval(() => {
    console.log("check");
    if (checkBlock()) {
      unlockContent();
      clearInterval(k);
      console.log("Block removed!");
    } else if (iter > 20) {
      console.log("No block detected");
      clearInterval(k);
    }
    iter++;
  }, 1000);
}

//check if blocking exists
function checkBlock() {
  return document.getElementById("gateway-content") != null;
}

//remove distracting elements and reinsert article
function unlockContent() {
  document.getElementById("gateway-content").remove();
  document.getElementById("app").firstChild.firstChild.style.position =
    "static";
  document.getElementById("story").innerHTML = story;
  document.getElementById("app").firstChild.firstChild.lastChild.remove();
}
