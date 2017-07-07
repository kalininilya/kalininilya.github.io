function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function onSideNavBtn(e) {
  if (e.target.classList.contains("open-btn")) {
    openNav();
    e.target.classList.remove("open-btn");
    e.target.classList.add("close-btn");
    e.target.innerHTML = "&#x2715;";
  } else {
    closeNav();
    e.target.classList.remove("close-btn");
    e.target.classList.add("open-btn");
    e.target.innerHTML = "&#9776;";
  }
}

document.getElementById("sidenav-btn").onclick = e => onSideNavBtn(e);

// .addEventListener("click", onSideNavBtn());
