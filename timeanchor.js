function showText(divId) {
  var feaText = document.getElementById(divId);
  if (feaText.style.display === "none" || feaText.style.display === "") {
    feaText.style.display = "block";
    document.getElementById(divId + "-button").textContent = "See Less";
  } else {
    feaText.style.display = "none";
    document.getElementById(divId + "-button").textContent = "See More";
  }
}

document.addEventListener("DOMContentLoaded", function() {

  setTimeout(function() {
    var header = document.querySelector(".home-header");
    var subtitle = document.querySelector(".home-subtitle");

    header.classList.add("visible");
    subtitle.classList.add("visible");
  }, 500);
});
