function userLogin() {
    const nameEl = document.querySelector(".name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "fortune.html";
  }
