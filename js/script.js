  var link = document.querySelector(".link-button");  
  var popup = document.querySelector(".modal-write-us");
  var close = popup.querySelector(".modal-close");
  var name = popup.querySelector("[name=name]");
  var form = popup.querySelector("form")
  var mail= popup.querySelector("[name=email]");
  var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

   try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage) {
    name.value = storage;
    mail.focus();
    } else {
    name.focus();
  }
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");

    
      window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
  form.addEventListener("submit", function (evt) {
      if (!name.value || !mail.value) {
      evt.preventDefault();
      console.log("Нужно ввести имя и e-mail");
    } else {
       if (isStorageSupport) {
        localStorage.setItem("name", name.value);
      };
    }
  });
}); 