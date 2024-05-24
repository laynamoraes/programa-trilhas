const menuMobile = document.querySelector(".menu__mobile")
const btnMenuOpen = document.querySelector(".btn__menu__open")
const btnMenuClose = document.querySelector(".btn__menu__close")

btnMenuOpen.addEventListener("click", function () {
  menuMobile.classList.add("menu__open")
})

btnMenuClose.addEventListener("click", function () {
  menuMobile.classList.remove("menu__open")
})
