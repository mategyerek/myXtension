//cache article
window.onload = () => {
  k = document.body.innerHTML;
  init();
};

function init() {
  //wait for block to appear
  var iter = 0;
  j = setInterval(() => {
    console.log("check");
    if (checkBlock()) {
      unlockContent();
      clearInterval(j);
      console.log("Block removed!");
      console.log(document.body);
    } else if (iter > 20) {
      console.log("No block detected");
      clearInterval(j);
    }
    iter++;
  }, 1000);
}

//check if blocking exists
function checkBlock() {
  return document.getElementById("paywall-ui-responsive-modal") != null;
}

//remove distracting elements and reinsert article
function unlockContent() {
  console.log(k);
  //reload article
  document.body.innerHTML = k;
  //enable scroll
  document.body.style.position = "static";
  //remove blocker
  document.getElementById("paywall-ui-responsive-modal").parentElement.remove();
}
