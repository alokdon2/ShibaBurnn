let animediv = document.getElementById("inserter");

async function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
async function animate() {
  for (i = 0; i < animediv.children.length; i++) {
    animediv.children[i].style.transform = "translateY(-10px)";
    animediv.children[i].style.background = "crimson";

    await sleep(0.2);
    animediv.children[i].style.transform = "translateY(0)";
    animediv.children[i].style.background = "black";
  }
}

setInterval(() => {
  animate();
}, 8000);
