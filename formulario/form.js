const form = document.querySelector("form");
//console.log(form);

function captureData(evento) {
  evento.preventDefault();
  const name = document.querySelector("#name").value;
  if (name.length < 3) {
    alert("Name must have at least three characters!");
  }
  const country = document.querySelector("#country").value;
  if (!country) {
    alert("You must select a country");
  }
  const email = document.querySelector("#email").value;
  if (!email.includes("@")) {
    alert("You must enter an email");
  }
  const request = document.querySelector("#request").value;
  if (request.length < 3) {
    alert("Request must have at least 3 characters");
  } else if (request.length > 300) {
    alert("Request cannot exceed 300 characters");
  }
  if (
    name.length >= 3 &&
    country &&
    email.includes("@") &&
    (request.length >= 3 || request.length <= 300)
  ) {
    alert(name + ": your request has been sent!");
    form.reset()
  }
}

form.addEventListener("submit", captureData);
