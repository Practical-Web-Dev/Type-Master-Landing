//DOM ELEMENTS
const body = document.getElementById("body");
const emailModal = document.querySelector(".email-modal")
const closeModal = document.querySelector(".close-modal")
const form = document.querySelector(".modal-form");
const emailInput = document.getElementById("email-input")
const modalBtn = document.querySelector(".modal-btn")
const errorMessage = document.getElementById("error-message")
const paymentModal = document.getElementById("payment-modal")
const preOrderBtns = document.querySelectorAll(".pre-order-btn")
const closePaymentModal = document.querySelector(".close-payement-modal")


//EVENT LISTENERS
closeModal.addEventListener("click", closeModalClick)
form.addEventListener("submit", submiteForm)
closePaymentModal.addEventListener("click", closePayement)



//FUNCTIONS
setTimeout(function () {

body.classList.add("modalBackdrop")
emailModal.style.display = "block"
   

 }, 2000)

function closeModalClick() {

 body.classList.remove("modalBackdrop")
emailModal.style.display = "none"

}

function submiteForm (e) {

e.preventDefault();
console.log(emailInput.value)

if (emailInput.value === '') {

emailInput.classList.add("error-border")

errorMessage.textContent = "Email can't be empty";

} else {

}


}

// Check email is valid
function checkEmail(email) {

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

//Open payment modal when pre order buttons are clicked
preOrderBtns.forEach(function(btn) {


btn.addEventListener('click', function() {

body.classList.add("modalBackdrop")
paymentModal.style.display = "Block"

})

})

function closePayement () {


 body.classList.remove("modalBackdrop")
paymentModal.style.display = "none"

}