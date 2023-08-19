const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

for (let el of items) {
  el.addEventListener("click", (e) => {
    let asimg = e.currentTarget.querySelector("img").getAttribute("src");

    aside.querySelector("img").setAttribute("src", asimg);
    aside.classList.add("on");
  });

  close.addEventListener("click", (e) => {
    aside.classList.remove("on");
  });
}
