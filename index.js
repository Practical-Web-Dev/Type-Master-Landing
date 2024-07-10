//DOM ELEMENTS
const body = document.getElementById("body");
const emailModal = document.querySelector(".email-modal")
const closeModal = document.querySelector(".close-modal")
const modalBtn = document.querySelector(".modal-btn")
const errorMessage = document.getElementById("error-message")
const paymentModal = document.getElementById("payment-modal")
const preOrderBtns = document.querySelectorAll(".pre-order-btn")
const closePaymentModal = document.querySelector(".close-payement-modal")
const popupModalForm = document.getElementById("popup-modal-form")
const emailSuccessMsg = document.getElementById("email-success")


//EVENT LISTENERS
popupModalForm.addEventListener("submit", submitPopupForm)
closeModal.addEventListener("click", closeModalClick)
closePaymentModal.addEventListener("click", closePayement)



//FUNCTIONS

function submitPopupForm(e) {
  e.preventDefault();
  emailSuccessMsg.style.display = "block"
}


const timeoutFunc = setTimeout(function () {

body.classList.add("modalBackdrop")
emailModal.style.display = "block"
   

 }, 2000)




function closeModalClick() {

body.classList.remove("modalBackdrop")
emailModal.style.display = "none"
 //Prevent setTimeout from activating again
clearTimeout(timeoutFunc)
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