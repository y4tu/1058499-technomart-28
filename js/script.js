var mapOpen = document.querySelector(".minimap-link");
var map = document.querySelector(".popup-map");
var mapClose = document.querySelector(".cross-map")
var cartOpenBtns = document.querySelectorAll(".goods-buy-link");
var cart = document.querySelector(".popup-cart");
var closeBtns = document.querySelectorAll(".cross");
var continueShopping = document.querySelector(".popup-continue")
var feedbackOpen = document.querySelector(".feedback-link");
var feedback = document.querySelector(".popup-feedback");
var feedbackClose = document.querySelector(".cross-feedback")
if (feedback) {
    var feedbackName = feedback.querySelector("#name-field");
    var feedbackEmail = feedback.querySelector("#email-field");
    var feedbackLetter = feedback.querySelector("#letter-field");
    var feedbackForm = feedback.querySelector(".popup-form");
}
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("feedbackName");
}

catch (err) {
    isStorageSupport = false;
}

if (cartOpenBtns) {
    for (let i = 0; i < cartOpenBtns.length; i++) {
      cartOpenBtns[i].addEventListener("click", function (evt) {
          evt.preventDefault();
          cart.classList.add("show");
      });
  }
}

if (closeBtns && cart) {
    for (let i = 0; i < closeBtns.length; i++) {
      closeBtns[i].addEventListener("click", function (evt) {
          evt.preventDefault();
          cart.classList.remove("show");
      })
  }
}

if (mapClose) {
    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      map.classList.remove("show");
      })
}

if (feedbackClose) {
    feedbackClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      feedback.classList.remove("show");
      feedback.classList.remove("error");
      })
}

if (continueShopping) {
    continueShopping.addEventListener("click", function (evt) {
      evt.preventDefault();
      cart.classList.remove("show");
  })
}

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (cart && cart.classList.contains("show")) {
        cart.classList.remove("show");
      }
    }
});

if (mapOpen) {
  mapOpen.addEventListener("click", function (evt) {
      evt.preventDefault();
      map.classList.add("show");
  });
}

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (map && map.classList.contains("show")) {
        map.classList.remove("show");
      }
    }
});

if (feedbackOpen) {
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
}

if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (evt) {
      if (!feedbackName.value || !feedbackEmail.value) {
        evt.preventDefault();
        feedback.classList.remove("error");
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("error");
      }
      else {
        localStorage.setItem("feedbackName", feedbackName.value);
      }
  });
}

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedback && feedback.classList.contains("show")) {
        feedback.classList.remove("show");
      }
      if (feedback && feedback.classList.contains("error")) {
        feedback.classList.remove("error");
      }
    }
});
