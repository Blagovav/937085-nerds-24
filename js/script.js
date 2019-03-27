  var link = document.querySelector(".link-button");
  var popup = document.querySelector(".modal-write-us");
  var close = popup.querySelector(".modal-close");
  var userName = popup.querySelector("input[name='name']");
  var form = popup.querySelector(".about-us-form");
  var email = popup.querySelector("input[name='email']");
  var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
      userName.value = storage;
      email.focus();
    } else {
      userName.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!userName.value || !email.value) {
      evt.preventDefault();
      form.classList.remove('modal-error');
      void form.offsetWidth;
      form.classList.add('modal-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", userName.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });