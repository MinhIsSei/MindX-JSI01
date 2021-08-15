let buttonSignIn = document.querySelector(".signIn");
let emailInput = document.querySelector(".emailInput");
let passwordInput = document.querySelector(".passwordInput");

let loginForm = document.querySelector(".container");
let phoneBook = document.querySelector(".container2");

let inputAddNameContact = document.querySelector("#addname");
let inputAddPhoneContact = document.querySelector("#addphone");
let inputAddContact = document.querySelector("#buttonaddcontact");

let table = document.querySelector("#tableContact");

let arrContact = [
  {
    name: "MindX",
    phone: 09080808,
  },
  {
    name: "MindX",
    phone: 09017208,
  },
];

phoneBook.style.display = "none";
buttonSignIn.addEventListener("click", function (e) {
  if (emailInput.value == "admin" && passwordInput.value == "admin") {
    alert("Ok");
    loginForm.style.display = "none";
    phoneBook.style.display = "flex";
  }
});

buttonaddcontact.addEventListener("click", function (e) {
  arrContact.push({
    name: inputAddNameContact.value,
    phoneNumber: inputAddPhoneContact.value,
  });
  //addcontact
});
arrContact.map(function (contactInfo, index) {
  let contactString = ` 
        <td>${index + 1}</td>
        <td>${contactInfo.name}</td>
        <td>${contactInfo.phone}</td>
        <td>
            <button type="button" class="btn btn-success">Update</button>
            <button type="button" class="btn btn-danger">Delete</button>
        </td>`;

  let contactHTML = document.createElement("tr");
  contactHTML.innerHTML = contactHTML;
  tableContact.appendChild(contactHTML);
});
