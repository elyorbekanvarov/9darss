const name = document.querySelector("#name");
const container = document.querySelector(".container");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const save = document.querySelector("#save");
const body = document.querySelector("body");
const form = document.querySelector("form");
const wrapper = document.querySelector(".wrapper");
const forms = document.querySelector(".forms")
console.log(wrapper);
console.log(form);
function createCard(info) {
  return `
    <div class="card">
            <h2>${info.name}</h2>
            <h2>${info.surname}</h2>
            <h2>${info.email}</h2>
        </div>
        
      `;
}
save.addEventListener("click", function (event) {
  event.preventDefault();

  let info = {
    name: name.value,
    surname: surname.value,
    email: email.value,
  };
  let item = createCard(info);
  console.log(info);
  wrapper.innerHTML += item;
});