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
const paymentForm = document.getElementById("payment-form");


//EVENT LISTENERS
popupModalForm.addEventListener("submit", submitPopupForm)
closeModal.addEventListener("click", closeModalClick)
closePaymentModal.addEventListener("click", closePayement)
paymentForm.addEventListener("submit", paymentSuccess)



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

function paymentSuccess (e) {


e.preventDefault();

paymentForm.innerHTML = 

`
<div class="success-message-container">
<h2 class="payement-success-heading">Thank You!<h2/>
<p class=payment-success-message>Your order has been receieved. Please check your email for your confirmation number and tracking information.</p>
<img class="payment-success-img" src="img/desktop/image-keyboard.jpg"
</div>



`

} 

function closePayement () {


 body.classList.remove("modalBackdrop")
paymentModal.style.display = "none"

}