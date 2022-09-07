var share = document.querySelector(".hidden");
var btn = document.querySelector(".share");

btn.addEventListener("click", function () {
  btn.classList.toggle("btn");
  share.classList.toggle("active");
});
/* mobile */
var mobileShare = document.querySelector(".mobile");
var btnMobile = document.querySelector(".mobile-shares");

btn.addEventListener("click", function () {
  btn.classList.toggle("act");
  mobileShare.classList.toggle("act");
  btnMobile.classList.toggle("share");
});
btnMobile.addEventListener("click", function () {
  btn.classList.toggle("btn");
  btnMobile.classList.toggle("btn");
  mobileShare.classList.toggle("act");
});
