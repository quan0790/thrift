<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set the recipient email address
  $recipient = 'contact@example.com';

  // Set the email subject
  $subject = 'New Contact Form Submission';

  // Build the email content
  $emailContent = "Name: $name\n";
  $emailContent .= "Email: $email\n\n";
  $emailContent .= "Message:\n$message";

  // Set the email headers
  $headers = "From: $name <$email>";

  // Send the email
  if (mail($recipient, $subject, $emailContent, $headers)) {
    echo 'Thank you! Your message has been sent.';
  } else {
    echo 'Oops! Something went wrong. Please try again later.';
  }
}
?>
