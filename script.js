function hoverCompany(element) {
  var name = element.getAttribute("data-name");
  var title = document.getElementById("companyName");
  if (name && title) {
    title.textContent = name;
  }
  element.classList.add("active");
}

function leaveCompany(element) {
  element.classList.remove("active");
}
