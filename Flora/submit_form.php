<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Process the form data (e.g., send an email, save to database, etc.)
  // ...

  // Return a response (e.g., success or error message)
  $response = "Thank you for your message!";
  echo $response;
}
?>
