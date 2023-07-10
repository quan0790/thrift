// Add event listener to the payment method select element
const paymentMethodSelect = document.getElementById('payment-method');
paymentMethodSelect.addEventListener('change', handlePaymentMethodChange);

function handlePaymentMethodChange() {
  const creditCardDetails = document.getElementById('credit-card-details');
  const paypalDetails = document.getElementById('paypal-details');

  if (paymentMethodSelect.value === 'credit-card') {
    creditCardDetails.style.display = 'block';
    paypalDetails.style.display = 'none';
  } else if (paymentMethodSelect.value === 'paypal') {
    creditCardDetails.style.display = 'none';
    paypalDetails.style.display = 'block';
  }
}

// Add event listener to the delivery method select element
const deliveryMethodSelect = document.getElementById('delivery-method');
deliveryMethodSelect.addEventListener('change', handleDeliveryMethodChange);

function handleDeliveryMethodChange() {
  const standardDeliveryDetails = document.getElementById('standard-delivery-details');
  const expressDeliveryDetails = document.getElementById('express-delivery-details');

  if (deliveryMethodSelect.value === 'standard') {
    standardDeliveryDetails.style.display = 'block';
    expressDeliveryDetails.style.display = 'none';
  } else if (deliveryMethodSelect.value === 'express') {
    standardDeliveryDetails.style.display = 'none';
    expressDeliveryDetails.style.display = 'block';
  }
}
