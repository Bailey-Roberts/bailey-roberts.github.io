function onScroll() {
  const header = document.getElementById("header")
  if (window.scrollY > 0) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }

  const imageContainer = document.getElementById("planetcont")
  if (imageContainer) {
    const fadeDistance = window.innerHeight * 0.75
    imageContainer.style.opacity = String(Math.max(0, 1 - window.scrollY / fadeDistance))
  }
}

document.addEventListener("scroll", onScroll)
window.addEventListener("resize", onScroll)
document.addEventListener("DOMContentLoaded", onScroll)
