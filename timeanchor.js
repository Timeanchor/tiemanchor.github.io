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

function scrollToElement(elementId) {
  var targetElement = document.getElementById(elementId);

  if (targetElement) {
      // Calculate the offset of the target element relative to the document
      var offsetTop = targetElement.offsetTop;

      // Scroll smoothly to the target element
      window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });
  }
}

function scrollToTop() {
  // Scroll smoothly to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.onscroll = function () {
  var scrollBtn = document.getElementById("back-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};


document.addEventListener("DOMContentLoaded", function() {

  setTimeout(function() {
    var header = document.querySelector(".home-header");
    var subtitle = document.querySelector(".home-subtitle");

    header.classList.add("visible");
    subtitle.classList.add("visible");
  }, 500);
});
