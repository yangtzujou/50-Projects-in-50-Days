const left = document.querySelector(".left")
const right = document.querySelector(".right")

left.addEventListener("mouseover", () => {
  left.classList.remove("close");
  left.classList.add("open");
  right.classList.remove("open");
  right.classList.add("close");
})

right.addEventListener("mouseover", () => {
  right.classList.remove("close");
  right.classList.add("open");
  left.classList.remove("open");
  left.classList.add("close");
})