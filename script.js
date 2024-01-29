
let notifboard = document.getElementById("notif-count");
let notifCount;

document.addEventListener("DOMContentLoaded", function () {

  let content = document.getElementsByClassName("info-content");
  let indicator = document.getElementsByClassName("unread-indicator");
  notifCount = indicator.length;

  notifboard.textContent = notifCount.toString();

  for (let i = 0; i < content.length; i++)
  {
    content[i].style.display = "none";
  }

});


let notifs = document.getElementsByClassName("notif");

for (let i = 0; i < notifs.length; i++) {

  notifs[i].addEventListener("click", function () {

    let content = document.getElementsByClassName("info-content");
    let indicator = document.getElementsByClassName("unread-indicator");

    notifs[i].style.background = "white";

    if (content[i].style.display === "none") {
      indicator[i].style.display = "none";
      content[i].style.display = "block";
      notifCount--;
    }
    else {
      content[i].style.display = "none";
    }

    notifboard.textContent = notifCount.toString();
  });

}