  var link = document.querySelector(".link-button");
  
  var popup = document.querySelector(".modal-write-us");
  var close = popup.querySelector(".modal-close");
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
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
  });