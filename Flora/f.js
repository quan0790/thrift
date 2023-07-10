var paymentMethodSelect = document.getElementById("payment-method");
var creditCardDetails = document.getElementById("credit-card-details");

paymentMethodSelect.addEventListener("change", function() {
  if (paymentMethodSelect.value === "visa") {
    creditCardDetails.style.display = "block";
    openCreditCardWindow();
  } else {
    creditCardDetails.style.display = "none";
  }
});

function openCreditCardWindow() {
  // Replace the URL with the actual URL of the credit card details page
  var url = "https://example.com/credit-card-details";
  window.open(url, "_blank");
}
