var mapOpen = document.querySelector(".minimap-link");
var map = document.querySelector(".popup-map");
var feedbackOpen = document.querySelector(".feedback-link");
var feedback = document.querySelector(".popup-feedback");
var feedbackName = feedback.querySelector("#name-field");
var feedbackEmail = feedback.querySelector("#email-field");
var feedbackLetter = feedback.querySelector("#letter-field");
var feedbackForm = feedback.querySelector(".popup-form");
var cartOpen = document.querySelector(".goods-buy-link");
var cartOpenList = document.querySelectorAll(".goods-buy-link");
var cart = document.querySelector(".popup-cart");
var close = document.querySelector(".cross");
var closeList = document.querySelectorAll(".cross");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("feedbackName");
}

catch (err) {
isStorageSupport = false;
}

for (let i = 0; i < cartOpenList.length; i++) {
    console.log(cartOpenList[i]);
    cartOpenList[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        cart.classList.add("show");
    });
}

for (let i = 0; i < closeList.length; i++) {
    console.log(closeList[i]);
    closeList[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        cart.classList.remove("show");
        map.classList.remove("show");
        feedback.classList.remove("show");
        feedback.classList.remove("error");
    })
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cart.classList.contains("show")) {
      evt.preventDefault();
      cart.classList.remove("show");
    }
  }
});

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (map.classList.contains("show")) {
      evt.preventDefault();
      map.classList.remove("show");
    }
  }
});

feedbackOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("show");
  if (storage) {
      feedbackName.value = storage;
      feedbackEmail.focus();
  }
  else {
      feedbackName.focus();
  }
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value) {
      evt.preventDefault();
      feedback.classList.remove("error");
      feedback.offsetWidth = feedback.offsetWidth;
      feedback.classList.add("error");
  } else {
      localStorage.setItem("feedbackName", feedbackName.value);
      localStorage.setItem("feedbackEmail", feedbackEmail.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedback.classList.contains("show")) {
      evt.preventDefault();
      feedback.classList.remove("show");
      feedback.classList.remove("error");
    }
  }
});
