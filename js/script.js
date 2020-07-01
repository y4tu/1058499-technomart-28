var mapOpen = document.querySelector(".minimap-link");
var map = document.querySelector(".popup-map");
var mapClose = document.querySelector(".cross-map");
var cartOpenBtns = document.querySelectorAll(".goods-buy-link");
var cart = document.querySelector(".popup-cart");
var closeBtns = document.querySelectorAll(".cross");
var continueShopping = document.querySelector(".popup-continue");
var feedbackOpen = document.querySelector(".feedback-link");
var feedback = document.querySelector(".popup-feedback");
var feedbackClose = document.querySelector(".cross-feedback");
var shippingName = document.querySelector(".services-shipping");
var warrantyName = document.querySelector(".services-warranty");
var creditName = document.querySelector(".services-credit");
var shippingContent = document.querySelector(".container-shipping");
var warrantyContent = document.querySelector(".container-warranty");
var creditContent = document.querySelector(".container-credit");
if (feedback) {
    var feedbackName = feedback.querySelector("#name-field");
    var feedbackEmail = feedback.querySelector("#email-field");
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
    for (var i = 0; i < cartOpenBtns.length; i++) {
      cartOpenBtns[i].addEventListener("click", function (evt) {
          evt.preventDefault();
          cart.classList.add("show");
      });
  }
}

if (closeBtns && cart) {
    for (var i = 0; i < closeBtns.length; i++) {
      closeBtns[i].addEventListener("click", function (evt) {
          evt.preventDefault();
          cart.classList.remove("show");
      });
  }
}

if (mapClose) {
    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      map.classList.remove("show");
      });
}

if (feedbackClose) {
    feedbackClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      feedback.classList.remove("show");
      feedback.classList.remove("error");
      });
}

if (continueShopping) {
    continueShopping.addEventListener("click", function (evt) {
      evt.preventDefault();
      cart.classList.remove("show");
  });
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

if (shippingName) {
  shippingName.addEventListener("click", function (evt) {
    evt.preventDefault();
    shippingName.classList.add("services-list-link-active");
    if (warrantyName.classList.contains("services-list-link-active")) {
      warrantyName.classList.remove("services-list-link-active");
    }
    if (creditName.classList.contains("services-list-link-active")) {
      creditName.classList.remove("services-list-link-active");
    }
    if (shippingName.classList.contains("services-list-link-active")) {
      shippingContent.classList.add("show-service");
    }
    if (warrantyContent.classList.contains("show-service")) {
      warrantyContent.classList.remove("show-service");
    }
    if (creditContent.classList.contains("show-service")) {
      creditContent.classList.remove("show-service");
    }
  })
}

if (warrantyName) {
  warrantyName.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (shippingName.classList.contains("services-list-link-active")) {
      shippingName.classList.remove("services-list-link-active");
    }
    warrantyName.classList.add("services-list-link-active");
    if (creditName.classList.contains("services-list-link-active")) {
      creditName.classList.remove("services-list-link-active");
    }
    if (shippingContent.classList.contains("show-service")) {
      shippingContent.classList.remove("show-service");
    }
    if (warrantyName.classList.contains("services-list-link-active")) {
      warrantyContent.classList.add("show-service");
    }
    if (creditContent.classList.contains("show-service")) {
      creditContent.classList.remove("show-service");
    }
  })
}

if (creditName) {
  creditName.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (shippingName.classList.contains("services-list-link-active")) {
      shippingName.classList.remove("services-list-link-active");
    }
    if (warrantyName.classList.contains("services-list-link-active")) {
      warrantyName.classList.remove("services-list-link-active");
    }
    creditName.classList.add("services-list-link-active");
    if (shippingContent.classList.contains("show-service")) {
      shippingContent.classList.remove("show-service");
    }
    if (warrantyContent.classList.contains("show-service")) {
      warrantyContent.classList.remove("show-service");
    }
    if (creditName.classList.contains("services-list-link-active")) {
      creditContent.classList.add("show-service");
    }
  })
}
